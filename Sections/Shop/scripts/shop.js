function renderSupplements(
  productImage = "../../images/ISO WHEY.jpg",
  productName,
  productDescription,
  productPrice
) {
  // The container.
  let shopSector = document.querySelector(".supplements-sector");

  // the column for each card.
  let column = document.createElement("div");
  column.classList.add("col-sm-6");
  column.classList.add("col-md-4");
  column.classList.add("col-lg-3");

  // created the container for the card
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("text-center");
  card.classList.add("p-4");
  card.classList.add("mb-4");

  // creating the Image
  const image = document.createElement("img");
  image.alt = "Product";
  image.src = productImage;

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
  productImage = "../../images/ISO WHEY.jpg",
  productName,
  productDescription,
  productPrice
) {
  // The container.
  let shopSector = document.querySelector(".snacks-sector");

  // the column for each card.
  let column = document.createElement("div");
  column.classList.add("col-sm-6");
  column.classList.add("col-md-4");
  column.classList.add("col-lg-3");

  // created the container for the card
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("text-center");
  card.classList.add("p-4");
  card.classList.add("mb-4");

  // creating the Image
  const image = document.createElement("img");
  image.alt = "Product";
  image.src = productImage;

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
  productImage = "../../images/ISO WHEY.jpg",
  productName,
  productDescription,
  productPrice
) {
  // The container.
  let shopSector = document.querySelector(".wearables-sector");

  // the column for each card.
  let column = document.createElement("div");
  column.classList.add("col-sm-6");
  column.classList.add("col-md-4");
  column.classList.add("col-lg-3");

  // created the container for the card
  let card = document.createElement("div");
  card.classList.add("card");
  card.classList.add("text-center");
  card.classList.add("p-4");
  card.classList.add("mb-4");

  // creating the Image
  const image = document.createElement("img");
  image.alt = "Product";
  image.src = productImage;

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
// renderSupplements("../../images/ISO WHEY.jpg");
// renderSupplements("../../images/ISO WHEY.jpg");
// renderSupplements("../../images/ISO WHEY.jpg");
// renderSupplements("../../images/ISO WHEY.jpg");
// renderSnacks("../../images/ISO WHEY.jpg");
// renderSnacks("../../images/ISO WHEY.jpg");
// renderSnacks("../../images/ISO WHEY.jpg");
// renderSnacks("../../images/ISO WHEY.jpg");
// renderWearables("../../images/ISO WHEY.jpg");
// renderWearables("../../images/ISO WHEY.jpg");
// renderWearables("../../images/ISO WHEY.jpg");
// renderWearables("../../images/ISO WHEY.jpg");

let shopNow = document.getElementById("shopNow");
let shop = document.getElementById("shop");

shopNow.onclick = () => {
  shop.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

function renderProduct(product) {
  if (product["category"] == "supplements") {
    renderSupplements(
      product["image"],
      product["name"],
      product["description"],
      product["price"]
    );
  } else if (product["category"] == "snacks") {
    renderSnacks(
      product["image"],
      product["name"],
      product["description"],
      product["price"]
    );
  } else if (product["category"] == "wearables") {
    renderWearables(
      product["image"],
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
fetchProducts();
