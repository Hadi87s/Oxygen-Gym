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
  card.classList.add("card", "text-center", "p-4", "mb-4");

  // creating the Image
  const image = document.createElement("img");
  image.alt = "Product";
  image.src = productImage; // Use the image path from the database

  // the text Header
  const header = document.createElement("h1");
  header.appendChild(document.createTextNode(productName));

  const description = document.createElement("p");
  description.appendChild(document.createTextNode(productDescription));

  // price tag
  const price = document.createElement("p");
  price.classList.add("price");

  // Crossed price tag
  const crossedTag = document.createElement("span");
  crossedTag.appendChild(document.createTextNode("10.99$"));
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
  addToCart.appendChild(document.createTextNode("Add to "));
  addToCart.appendChild(cart);

  const addToWishlist = document.createElement("button");
  addToWishlist.appendChild(document.createTextNode("Add to "));
  addToWishlist.appendChild(wishlist);

  Buttons.appendChild(addToCart);
  Buttons.appendChild(addToWishlist);

  // Adding everything to the product List.
  card.appendChild(image);
  card.appendChild(header);
  card.appendChild(description);
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
  card.classList.add("card", "text-center", "p-4", "mb-4");

  // creating the Image
  const image = document.createElement("img");
  image.alt = "Product";
  image.src = productImage; // Use the image path from the database

  // the text Header
  const header = document.createElement("h1");
  header.appendChild(document.createTextNode(productName));

  const description = document.createElement("p");
  description.appendChild(document.createTextNode(productDescription));

  // price tag
  const price = document.createElement("p");
  price.classList.add("price");

  // Crossed price tag
  const crossedTag = document.createElement("span");
  crossedTag.appendChild(document.createTextNode("10.99$"));
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
  addToCart.appendChild(document.createTextNode("Add to "));
  addToCart.appendChild(cart);

  const addToWishlist = document.createElement("button");
  addToWishlist.appendChild(document.createTextNode("Add to "));
  addToWishlist.appendChild(wishlist);

  Buttons.appendChild(addToCart);
  Buttons.appendChild(addToWishlist);

  // Adding everything to the product List.
  card.appendChild(image);
  card.appendChild(header);
  card.appendChild(description);
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
  card.classList.add("card", "text-center", "p-4", "mb-4");

  // creating the Image
  const image = document.createElement("img");
  image.alt = "Product";
  image.src = productImage; // Use the image path from the database

  // the text Header
  const header = document.createElement("h1");
  header.appendChild(document.createTextNode(productName));

  const description = document.createElement("p");
  description.appendChild(document.createTextNode(productDescription));

  // price tag
  const price = document.createElement("p");
  price.classList.add("price");

  // Crossed price tag
  const crossedTag = document.createElement("span");
  crossedTag.appendChild(document.createTextNode("10.99$"));
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
  addToCart.appendChild(document.createTextNode("Add to "));
  addToCart.appendChild(cart);

  const addToWishlist = document.createElement("button");
  addToWishlist.appendChild(document.createTextNode("Add to "));
  addToWishlist.appendChild(wishlist);

  Buttons.appendChild(addToCart);
  Buttons.appendChild(addToWishlist);

  // Adding everything to the product List.
  card.appendChild(image);
  card.appendChild(header);
  card.appendChild(description);
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
