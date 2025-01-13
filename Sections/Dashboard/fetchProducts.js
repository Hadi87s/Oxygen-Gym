function createProductCard(product) {
  // Create the main container for all products
  const allProductsContainer = document.querySelector(".allProducts");

  // Create the card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Create the image element
  const img = document.createElement("img");
  img.src = product.image_path; // Use the correct field name from your database
  img.alt = "Product Image";

  // Create the card content container
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  // Create the product name element
  const productName = document.createElement("h3");
  productName.textContent = product.name;

  // Create the product description element
  const productDescription = document.createElement("p");
  productDescription.textContent = product.description;

  // Append the name and description to the card content
  cardContent.appendChild(productName);
  cardContent.appendChild(productDescription);

  // Create the card actions container
  const cardActions = document.createElement("div");
  cardActions.classList.add("card-actions");

  // Create the price element
  const price = document.createElement("span");
  price.classList.add("price");
  price.textContent = `$${product.price}`; // Format the price as needed

  // Create the delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  // Add event listener to the delete button
  deleteButton.addEventListener("click", () => {
    // Send a POST request to the PHP backend
    fetch("delete_product.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id: product.id }), // Send the product ID
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          // Remove the card from the DOM
          allProductsContainer.removeChild(card);
        } else {
          alert("Failed to delete product: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  // Append the price and delete button to the card actions
  cardActions.appendChild(price);
  cardActions.appendChild(deleteButton);

  // Append the image, card content, and card actions to the card
  card.appendChild(img);
  card.appendChild(cardContent);
  card.appendChild(cardActions);

  // Append the card to the all products container
  allProductsContainer.appendChild(card);
}

function renderProduct(product) {
  createProductCard(product);
}

function fetchProducts() {
  fetch("http://localhost/Oxygen-Gym/Sections/Shop/scripts/fetch_products.php")
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

fetchProducts(); // fetching the data from the server (php code).
