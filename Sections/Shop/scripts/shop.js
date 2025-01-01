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
  console.log(this.productImage);

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
  console.log(column);

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
  console.log(this.productImage);

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
  console.log(column);

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
  console.log(this.productImage);

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
  console.log(column);

  shopSector.appendChild(column);
}
renderSupplements("../../images/ISO WHEY.jpg");
renderSupplements("../../images/ISO WHEY.jpg");
renderSupplements("../../images/ISO WHEY.jpg");
renderSupplements("../../images/ISO WHEY.jpg");
renderSnacks("../../images/ISO WHEY.jpg");
renderSnacks("../../images/ISO WHEY.jpg");
renderSnacks("../../images/ISO WHEY.jpg");
renderSnacks("../../images/ISO WHEY.jpg");
renderWearables("../../images/ISO WHEY.jpg");
renderWearables("../../images/ISO WHEY.jpg");
renderWearables("../../images/ISO WHEY.jpg");
renderWearables("../../images/ISO WHEY.jpg");

let shopNow = document.getElementById("shopNow");
let shop = document.getElementById("shop");

shopNow.onclick = () => {
  shop.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

// async function fetchProducts() {
//   try {
//     const response = await fetch("../fetch_products.php");
//     if (!response.ok) {
//       throw new Error("Failed to fetch products");
//     }
//     const products = await response.json();

//     // Loop through products and render them based on their category
//     products.forEach((product) => {
//       switch (product.category) {
//         case "supplements":
//           renderSupplements(
//             product.image_path,
//             product.name,
//             product.description,
//             product.price
//           );
//           break;
//         case "snacks":
//           renderSnacks(
//             product.image_path,
//             product.name,
//             product.description,
//             product.price
//           );
//           break;
//         case "wearables":
//           renderWearables(
//             product.image_path,
//             product.name,
//             product.description,
//             product.price
//           );
//           break;
//       }
//     });
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// Call the function to fetch and render products
// fetchProducts();
