function addProduct() {
  // The container.
  let shopSector = document.querySelector(".suppliments-sector");

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

  // the text Header
  const header = document.createElement("h1");

  header.appendChild(document.createTextNode("Sample"));

  const description = document.createElement("p");
  description.appendChild(document.createTextNode("someTextHere"));

  console.log(description);

  // Craeting the Buttons.

  const Buttons = document.createElement("div");
  Buttons.classList.add("buttons");

  const addToCart = document.createElement("button");
  addToCart.appendChild(document.createTextNode("Add To Cart"));

  const addToWishlist = document.createElement("button");
  addToWishlist.appendChild(document.createTextNode("Add To Wishlist"));

  Buttons.appendChild(addToCart);
  Buttons.appendChild(addToWishlist);

  // Adding everything to the product List.

  card.appendChild(header);
  card.appendChild(description);
  card.appendChild(Buttons);

  column.appendChild(card);
  console.log(column);

  shopSector.appendChild(column);
}

addProduct();
addProduct();
addProduct();
addProduct();
