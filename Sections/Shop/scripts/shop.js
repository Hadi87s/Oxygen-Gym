const cartBtn = document.getElementById("cartBtn");
const cartPopup = document.getElementById("cartPopup");
const cartProductList = document.getElementById("cartProducts");
const closeBtn = document.getElementById("closeCart");

if (localStorage.getItem("fullname")) {
  document.getElementById("user-greeting").textContent =
    localStorage.getItem("fullname");
  document.getElementById("user-greeting").style.display = "block";
}

if (localStorage.getItem("logout") === "shown") {
  document.getElementById("logout-link").classList.add("show");
}

document.getElementById("checkoutBtn").onclick = () => {
  window.location.href =
    "http://localhost/Web%20Project/Sections/checkout/checkout.html";
};

document.getElementById("shopNow").onclick = () => {
  document.getElementById("discover").scrollIntoView({
    behavior: "smooth",
  });
};

// Load cart from local storage on page load
window.onload = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.forEach((product) => {
    createProductElement(
      product.productName,
      product.description,
      product.price,
      product.quantity,
      product.imageSrc
    );
  });
  updateTotalPrice(); // Update total price on page load
};

// Toggle cart popup visibility
cartBtn.addEventListener("click", (e) => {
  cartPopup.classList.toggle("show");
});

// Close cart popup
closeBtn.addEventListener("click", () => {
  cartPopup.classList.remove("show");
});

// Function to create a product element in the cart
function createProductElement(
  productName,
  description,
  price,
  quantity,
  imageSrc
) {
  // Create the main container div with the class "box"
  const boxDiv = document.createElement("div");
  boxDiv.className = "box";

  // Create the image container and image element
  const imageDiv = document.createElement("div");
  imageDiv.className = "image";
  const img = document.createElement("img");
  img.src = imageSrc;
  img.alt = `${productName} image`;
  imageDiv.appendChild(img);

  // Create the about-product section
  const aboutProductDiv = document.createElement("div");
  aboutProductDiv.className = "about-product";
  const productNameHeading = document.createElement("h4");
  productNameHeading.textContent = productName;
  const productDescription = document.createElement("p");
  productDescription.textContent = description;
  aboutProductDiv.appendChild(productNameHeading);
  aboutProductDiv.appendChild(productDescription);

  // Create the product-price section
  const productPriceDiv = document.createElement("div");
  productPriceDiv.className = "product-price";

  // Create the price paragraph
  const priceParagraph = document.createElement("p");
  priceParagraph.innerHTML = `Price: $<span>${price}</span>`;
  productPriceDiv.appendChild(priceParagraph);

  // Create the product-quantity section
  const productQuantityDiv = document.createElement("div");
  productQuantityDiv.className = "product-quantity";
  productQuantityDiv.style.display = "flex";
  productQuantityDiv.style.justifyContent = "space-around";
  productQuantityDiv.style.width = "70px";

  // Create the - button
  const minusButton = document.createElement("button");
  const minusIcon = document.createElement("i");
  minusIcon.classList.add("ri-subtract-line"); // Remix Icon for minus
  minusButton.appendChild(minusIcon);

  // Style the - button
  minusButton.style.all = "unset";
  minusButton.style.backgroundColor = "var(--lighter-bg)";
  minusButton.style.width = "20px"; // Adjust as needed
  minusButton.style.height = "20px"; // Adjust as needed
  minusButton.style.borderRadius = "50%";
  minusButton.style.display = "flex";
  minusButton.style.alignItems = "center";
  minusButton.style.justifyContent = "center";
  minusButton.style.cursor = "pointer";
  minusButton.style.color = "var(--secondary-color)"; // Icon color
  minusButton.style.transition = "0.2s ease-out";
  minusButton.addEventListener("mouseenter", () => {
    minusButton.style.backgroundColor = "var(--secondary-color)";
    minusButton.style.color = "var(--lighter-bg)";
  });
  minusButton.addEventListener("mouseleave", () => {
    minusButton.style.backgroundColor = "var(--lighter-bg)";
    minusButton.style.color = "var(--secondary-color)";
  });
  minusButton.addEventListener("click", () => {
    updateQuantity(productName, -1);
  });

  // Create the quantity display
  const quantityParagraph = document.createElement("span");
  quantityParagraph.textContent = quantity;

  // Create the + button
  const plusButton = document.createElement("button");
  const plusIcon = document.createElement("i");
  plusIcon.classList.add("ri-add-line"); // Remix Icon for plus
  plusButton.appendChild(plusIcon);

  // Style the + button
  plusButton.style.all = "unset";
  plusButton.style.backgroundColor = "var(--lighter-bg)";
  plusButton.style.width = "20px"; // Adjust as needed
  plusButton.style.height = "20px"; // Adjust as needed
  plusButton.style.borderRadius = "50%";
  plusButton.style.display = "flex";
  plusButton.style.alignItems = "center";
  plusButton.style.justifyContent = "center";
  plusButton.style.cursor = "pointer";
  plusButton.style.color = "var(--secondary-color)"; // Icon color
  plusButton.style.transition = "0.2s ease-out";
  plusButton.addEventListener("mouseenter", () => {
    plusButton.style.backgroundColor = "var(--secondary-color)";
    plusButton.style.color = "var(--lighter-bg)";
  });
  plusButton.addEventListener("mouseleave", () => {
    plusButton.style.backgroundColor = "var(--lighter-bg)";
    plusButton.style.color = "var(--secondary-color)";
  });
  plusButton.addEventListener("click", () => {
    updateQuantity(productName, 1);
  });

  // Append buttons and quantity display to the quantity container
  productQuantityDiv.appendChild(minusButton);
  productQuantityDiv.appendChild(quantityParagraph);
  productQuantityDiv.appendChild(plusButton);

  // Append the quantity container to the product-price div
  productPriceDiv.appendChild(productQuantityDiv);

  // Append all sections to the main container
  boxDiv.appendChild(imageDiv);
  boxDiv.appendChild(aboutProductDiv);
  boxDiv.appendChild(productPriceDiv);

  // Append the main container to the cart product list
  cartProductList.appendChild(boxDiv);
}

// Function to update the quantity of a product in the cart
function updateQuantity(productName, change) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productIndex = cart.findIndex((p) => p.productName === productName);

  if (productIndex !== -1) {
    // Update the quantity
    cart[productIndex].quantity += change;

    // Remove the product if the quantity reaches 0
    if (cart[productIndex].quantity <= 0) {
      cart.splice(productIndex, 1);
    }

    // Update local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Re-render the cart
    cartProductList.innerHTML = ""; // Clear the current list
    cart.forEach((product) => {
      createProductElement(
        product.productName,
        product.description,
        product.price,
        product.quantity,
        product.imageSrc
      );
    });

    // Update the total price display
    updateTotalPrice();
  }
}

// Function to calculate the total price of all products in the cart
function calculateTotalPrice() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalPrice = 0;

  cart.forEach((product) => {
    totalPrice += product.price * product.quantity;
  });

  return totalPrice.toFixed(2); // Returns the total price rounded to 2 decimal places
}

// Function to update the total price display
function updateTotalPrice() {
  const totalPriceElement = document.getElementById("totalPrice");
  if (totalPriceElement) {
    totalPriceElement.innerText = calculateTotalPrice();
  }
}

// Function to add a product to the cart in local storage
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find(
    (p) => p.productName === product.productName
  );

  if (existingProduct) {
    // If the product already exists, increment its quantity
    existingProduct.quantity += 1;
  } else {
    // If the product doesn't exist, add it to the cart
    product.quantity = 1; // Initialize quantity to 1 for new products
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

// Function to render a product card
function renderProductCard(
  productImage,
  productName,
  productDescription,
  productPrice,
  container
) {
  // Create the column for each card
  const column = document.createElement("div");
  column.classList.add("col-sm-6", "col-md-4", "col-lg-3");

  // Create the container for the card
  const card = document.createElement("div");
  card.classList.add("cardd", "text-center", "pb-4", "mb-4");

  // Create the product image
  const image = document.createElement("img");
  image.alt = "Product";
  image.src = productImage;

  // Create the product name header
  const header = document.createElement("h1");
  header.appendChild(document.createTextNode(productName));

  // Price tag
  const price = document.createElement("p");
  price.classList.add("price");

  // Crossed price tag
  const crossedTag = document.createElement("span");
  crossedTag.appendChild(document.createTextNode("10.99$ "));
  crossedTag.classList.add("crossed-price");

  price.appendChild(crossedTag);
  price.appendChild(document.createTextNode(productPrice + "$"));

  // Create the buttons container
  const Buttons = document.createElement("div");
  Buttons.classList.add("buttons");

  // Cart icon
  const cart = document.createElement("i");
  cart.classList.add("ri-shopping-cart-fill");

  // Wishlist icon
  const wishlist = document.createElement("i");
  wishlist.classList.add("ri-heart-fill");

  const addToCartBtn = document.createElement("button");
  addToCartBtn.appendChild(cart);

  const addToWishlist = document.createElement("button");
  addToWishlist.className = "wishlist";
  addToWishlist.appendChild(wishlist);

  Buttons.appendChild(addToCartBtn);
  Buttons.appendChild(addToWishlist);

  // Added to cart animation element
  const addedToCartDiv = document.createElement("div");
  addedToCartDiv.classList.add("addedToCart");
  const boxIcon = document.createElement("i");
  boxIcon.classList.add("ri-box-3-fill");
  addedToCartDiv.appendChild(boxIcon);

  // Add to cart button click event
  addToCartBtn.addEventListener("click", () => {
    if (localStorage.getItem("fullname")) {
      // Trigger the animation
      addedToCartDiv.classList.add("active");
      addedToCartDiv.addEventListener(
        "animationend",
        () => {
          addedToCartDiv.classList.remove("active");
        },
        { once: true }
      );

      // Add the product to the cart
      const product = {
        productName,
        description: productDescription,
        price: productPrice,
        imageSrc: productImage,
      };
      addToCart(product);

      // Clear the cart product list and re-render it
      cartProductList.innerHTML = ""; // Clear the current list
      const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
      updatedCart.forEach((product) => {
        createProductElement(
          product.productName,
          product.description,
          product.price,
          product.quantity,
          product.imageSrc
        );
      });

      // Update the total price display
      updateTotalPrice();
    } else {
      document.querySelector(".userNotLoggedIn").style.display = "flex";
      let timeLeft = 3;
      const interval = setInterval(() => {
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft.toString();
        if (timeLeft <= 0) {
          clearInterval(interval);
          window.location.href =
            "http://localhost/Web%20Project/Sections/SignIn/signin.html";
        }
      }, 1000);
    }
  });

  // Append all elements to the card
  card.appendChild(image);
  card.appendChild(header);
  card.appendChild(price);
  card.appendChild(addedToCartDiv);
  card.appendChild(Buttons);

  // Append card to the column and column to the container
  column.appendChild(card);
  container.appendChild(column);
}

// Function to render a product based on its category
function renderProduct(product) {
  let container;
  if (product["category"] === "supplements") {
    container = document.querySelector(".supplements-sector");
  } else if (product["category"] === "snacks") {
    container = document.querySelector(".snacks-sector");
  } else if (product["category"] === "wearables") {
    container = document.querySelector(".wearables-sector");
  }
  renderProductCard(
    product["image_path"], // Use the correct field from the database
    product["name"],
    product["description"],
    product["price"],
    container
  );
}

// Fetch products from the server
function fetchProducts() {
  fetch(
    "http://localhost/Web%20Project/Sections/Shop/scripts/fetch_products.php"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      return response.json();
    })
    .then((products) => {
      if (products.length > 0) {
        products.forEach((product) => {
          renderProduct(product);
        });
      } else {
        console.log("No products found");
      }
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

fetchProducts(); // Fetch the data from the server (PHP code).
