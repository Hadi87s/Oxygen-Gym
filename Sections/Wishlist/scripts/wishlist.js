// Function to render wishlist items
function renderWishlist() {
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const wishlistProducts = document.getElementById("wishlistProducts");

  if (wishlist.length === 0) {
    wishlistProducts.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }

  wishlistProducts.innerHTML = ""; // Clear existing content

  wishlist.forEach((product) => {
    const wishlistItem = document.createElement("div");
    wishlistItem.className = "wishlist-item";

    const productImage = document.createElement("img");
    productImage.src = product.imageSrc;
    productImage.alt = product.productName;

    const productName = document.createElement("h3");
    productName.textContent = product.productName;

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;

    const productPrice = document.createElement("p");
    productPrice.className = "price";
    productPrice.textContent = `$${product.price}`;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", () => {
      // Add product to cart logic (if needed)
    });

    wishlistItem.appendChild(productImage);
    wishlistItem.appendChild(productName);
    wishlistItem.appendChild(productDescription);
    wishlistItem.appendChild(productPrice);
    wishlistItem.appendChild(addToCartBtn);

    wishlistProducts.appendChild(wishlistItem);
  });
}

// Load wishlist items on page load
window.onload = renderWishlist;
