if (localStorage.getItem("fullname")) {
  console.log(document.getElementById("user-greeting"));

  document.getElementById("user-greeting").textContent =
    localStorage.getItem("fullname");
  document.getElementById("user-greeting").style.display = "block";
}

if (localStorage.getItem("logout") === "shown") {
  document.getElementById("logout-link").classList.add("show");
}

window.onload = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    cart.forEach((product) => {
      createProductElement(
        product.productName,
        product.description,
        product.price,
        product.quantity,
        product.imageSrc
      );
    });
  }
};

const cartBtn = document.getElementById("cartBtn");
const cartPopup = document.getElementById("cartPopup");
const cartProductList = document.getElementById("cartProducts");
const addedProducts = [];
cartBtn.addEventListener("click", () => {
  cartPopup.classList.toggle("show");
});

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
  const priceParagraph = document.createElement("p");
  priceParagraph.innerHTML = `Price: $<span>${price}</span>`;
  productPriceDiv.appendChild(priceParagraph);

  // Create the product-quantity section
  const productQuantityDiv = document.createElement("div");
  productQuantityDiv.className = "product-quantity";
  const quantityParagraph = document.createElement("p");
  quantityParagraph.innerHTML = `Quantity: <span>${quantity}</span>`;
  productQuantityDiv.appendChild(quantityParagraph);

  const newProduct = {
    productName,
    description,
    price,
    quantity,
    imageSrc,
  };
  localStorage.setItem(
    "cart",
    JSON.stringify([
      ...(JSON.parse(localStorage.getItem("cart")) || []),
      newProduct,
    ])
  );
  // Append all sections to the main container
  boxDiv.appendChild(imageDiv);
  boxDiv.appendChild(aboutProductDiv);
  boxDiv.appendChild(productPriceDiv);
  boxDiv.appendChild(productQuantityDiv);
  // Append the main container to the body or any specific element
  cartProductList.appendChild(boxDiv);
}

function renderSupplements(
  productImage,
  productName,
  productDescription,
  productPrice
) {
  // The container.
  let shopSector = document.querySelector(".supplements-sector");

  // the column for each card.
  let column = document.createElement("div");
  column.classList.add("col-sm-6", "col-md-4", "col-lg-3");

  // created the container for the card
  let card = document.createElement("div");
  card.classList.add("cardd", "text-center", "pb-4", "mb-4");

  // creating the Image
  const image = document.createElement("img");
  image.alt = "Product";
  image.src = productImage; // Use the image path from the database

  // the text Header
  const header = document.createElement("h1");
  header.appendChild(document.createTextNode(productName));

  // const description = document.createElement("p");
  // description.appendChild(document.createTextNode(productDescription));

  // price tag
  const price = document.createElement("p");
  price.classList.add("price");

  // Crossed price tag
  const crossedTag = document.createElement("span");
  crossedTag.appendChild(document.createTextNode("10.99$ "));
  crossedTag.classList.add("crossed-price");

  price.appendChild(crossedTag);
  price.appendChild(document.createTextNode(productPrice + "$"));

  // Creating the Buttons.
  const Buttons = document.createElement("div");
  Buttons.classList.add("buttons");

  // cart Icon
  const cart = document.createElement("i");
  cart.classList.add("ri-shopping-cart-fill");

  // wishlist icon
  const wishlist = document.createElement("i");
  wishlist.classList.add("ri-heart-fill");

  const addToCart = document.createElement("button");
  addToCart.appendChild(cart);

  const addToWishlist = document.createElement("button");
  addToWishlist.className = "wishlist";
  addToWishlist.appendChild(wishlist);

  Buttons.appendChild(addToCart);
  Buttons.appendChild(addToWishlist);

  addToCart.addEventListener("click", () => {
    createProductElement(
      productName,
      productDescription,
      productPrice,
      1,
      productImage
    );
  });
  // Adding everything to the product List.
  card.appendChild(image);
  card.appendChild(header);
  // card.appendChild(description);
  card.appendChild(price);
  card.appendChild(Buttons);

  column.appendChild(card);
  shopSector.appendChild(column);
}

function renderSnacks(
  productImage,
  productName,
  productDescription,
  productPrice
) {
  // The container.
  let shopSector = document.querySelector(".snacks-sector");

  // the column for each card.
  let column = document.createElement("div");
  column.classList.add("col-sm-6", "col-md-4", "col-lg-3");

  // created the container for the card
  let card = document.createElement("div");
  card.classList.add("cardd", "text-center", "pb-4", "mb-4");

  // creating the Image
  const image = document.createElement("img");
  image.alt = "Product";
  image.src = productImage; // Use the image path from the database

  // the text Header
  const header = document.createElement("h1");
  header.appendChild(document.createTextNode(productName));

  // const description = document.createElement("p");
  // description.appendChild(document.createTextNode(productDescription));

  // price tag
  const price = document.createElement("p");
  price.classList.add("price");

  // Crossed price tag
  const crossedTag = document.createElement("span");
  crossedTag.appendChild(document.createTextNode("10.99$ "));
  crossedTag.classList.add("crossed-price");

  price.appendChild(crossedTag);
  price.appendChild(document.createTextNode(productPrice + "$"));

  // Creating the Buttons.
  const Buttons = document.createElement("div");
  Buttons.classList.add("buttons");

  // cart Icon
  const cart = document.createElement("i");
  cart.classList.add("ri-shopping-cart-fill");

  // wishlist icon
  const wishlist = document.createElement("i");
  wishlist.classList.add("ri-heart-fill");

  const addToCart = document.createElement("button");
  addToCart.appendChild(cart);

  const addToWishlist = document.createElement("button");
  addToWishlist.className = "wishlist";
  addToWishlist.appendChild(wishlist);

  Buttons.appendChild(addToCart);
  Buttons.appendChild(addToWishlist);
  addToCart.addEventListener("click", () => {
    createProductElement(
      productName,
      productDescription,
      productPrice,
      1,
      productImage
    );
  });
  // Adding everything to the product List.
  card.appendChild(image);
  card.appendChild(header);
  // card.appendChild(description);
  card.appendChild(price);
  card.appendChild(Buttons);

  column.appendChild(card);
  shopSector.appendChild(column);
}

function renderWearables(
  productImage,
  productName,
  productDescription,
  productPrice
) {
  // The container.
  let shopSector = document.querySelector(".wearables-sector");

  // the column for each card.
  let column = document.createElement("div");
  column.classList.add("col-sm-6", "col-md-4", "col-lg-3");

  // created the container for the card
  let card = document.createElement("div");
  card.classList.add("cardd", "text-center", "pb-4", "mb-4");

  // creating the Image
  const image = document.createElement("img");
  image.alt = "Product";
  image.src = productImage; // Use the image path from the database

  // the text Header
  const header = document.createElement("h1");
  header.appendChild(document.createTextNode(productName));

  // const description = document.createElement("p");
  // description.appendChild(document.createTextNode(productDescription));

  // price tag
  const price = document.createElement("p");
  price.classList.add("price");

  // Crossed price tag
  const crossedTag = document.createElement("span");
  crossedTag.appendChild(document.createTextNode("10.99$ "));
  crossedTag.classList.add("crossed-price");

  price.appendChild(crossedTag);
  price.appendChild(document.createTextNode(productPrice + "$"));

  // Creating the Buttons.
  const Buttons = document.createElement("div");
  Buttons.classList.add("buttons");

  // cart Icon
  const cart = document.createElement("i");
  cart.classList.add("ri-shopping-cart-fill");

  // wishlist icon
  const wishlist = document.createElement("i");
  wishlist.classList.add("ri-heart-fill");

  const addToCart = document.createElement("button");
  addToCart.appendChild(cart);

  const addToWishlist = document.createElement("button");
  addToWishlist.className = "wishlist";
  addToWishlist.appendChild(wishlist);

  Buttons.appendChild(addToCart);
  Buttons.appendChild(addToWishlist);

  addToCart.addEventListener("click", () => {
    createProductElement(
      productName,
      productDescription,
      productPrice,
      1,
      productImage
    );
  });
  // Adding everything to the product List.
  card.appendChild(image);
  card.appendChild(header);
  // card.appendChild(description);
  card.appendChild(price);
  card.appendChild(Buttons);

  column.appendChild(card);
  shopSector.appendChild(column);
}

function renderProduct(product) {
  if (product["category"] === "supplements") {
    renderSupplements(
      product["image_path"], // Use the correct field from the database
      product["name"],
      product["description"],
      product["price"]
    );
  } else if (product["category"] === "snacks") {
    renderSnacks(
      product["image_path"], // Use the correct field from the database
      product["name"],
      product["description"],
      product["price"]
    );
  } else if (product["category"] === "wearables") {
    renderWearables(
      product["image_path"], // Use the correct field from the database
      product["name"],
      product["description"],
      product["price"]
    );
  }
}

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
