document.addEventListener("DOMContentLoaded", () => {
  const productsList = document.getElementById("productsList");
  const subtotalElement = document.getElementById("subtotal");
  const vatElement = document.getElementById("vat");
  const totalElement = document.getElementById("total");
  const payAmountElement = document.getElementById("payAmount");

  // Load products from local storage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Render products
  let subtotal = 0;
  if (cart.length > 0) {
    cart.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.className = "product-item";

      // Product Image
      const productImage = document.createElement("img");
      productImage.src = product.imageSrc;
      productImage.alt = product.productName;

      // Product Details
      const productDetails = document.createElement("div");
      productDetails.className = "product-details";

      const productName = document.createElement("div");
      productName.className = "product-name";
      productName.textContent = `${product.productName} (x${product.quantity})`;
      productName.style.fontWeight = "bold";
      const productPrice = document.createElement("div");
      productPrice.className = "product-price";
      productPrice.innerHTML = `$${(product.price * product.quantity).toFixed(
        2
      )} <span>$${(product.price * 1.5).toFixed(2)}</span>`;
      productPrice.style.fontWeight = "bold";

      productDetails.appendChild(productName);
      productDetails.appendChild(productPrice);

      productItem.appendChild(productImage);
      productItem.appendChild(productDetails);

      productsList.appendChild(productItem);

      subtotal += product.price * product.quantity;
    });
  } else {
    // If the cart is empty, display a message
    const emptyCartMessage = document.createElement("p");
    emptyCartMessage.textContent = "Your cart is empty.";
    productsList.appendChild(emptyCartMessage);
  }

  // Calculate VAT and total
  const vat = subtotal * 0.2;
  const total = subtotal + vat;

  // Update summary
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  vatElement.textContent = `$${vat.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
  payAmountElement.textContent = `$${total.toFixed(2)}`;
});
