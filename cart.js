const cartList = document.getElementById("cart-list");
const totalPriceElement = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");
const searchInput = document.querySelector(".search-input");
const checkoutButton = document.getElementById("checkout-button");
const successOverlay = document.getElementById("success-overlay");
const successOrderId = document.getElementById("success-order-id");
const successDeliveryDate = document.getElementById("success-delivery-date");
const successPaymentMethod = document.getElementById("success-payment-method");
const successTotalAmount = document.getElementById("success-total-amount");
const continueButton = document.getElementById("continue-button");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function normalizeCart() {
  cart = cart.map(function(item){
    if (!item.quantity) {
       item.quantity = 1;
    }
    return item;
  });
}
function getCartItemCount() {
  let count = 0;
  cart.forEach(function(item){
    count+= item.quantity;
  });
  return count;
}

function updateCartCount() {
  cartCount.textContent = getCartItemCount();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function getTotalPrice() {
  let total = 0;

  cart.forEach(function (product) {
    total += Number(product.price) * product.quantity;
  });

  return total.toFixed(2);
}

  function updateTotalPrice() {
  if (totalPriceElement) {
    totalPriceElement.textContent = "₹" + getTotalPrice();
  }
}

function updateCheckoutButton(){
  if(!checkoutButton){
    return;
  }
  checkoutButton.disabled = cart.length === 0;
}
function getRandomOrderId(){
  return "ORD" + Math.floor(100000 + Math.random() * 900000);
}

function getEstimatedDeliveryDate() {
  const deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 5);

  return deliveryDate.toLocaleDateString("en-IN",{
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function getRandomPaymentMethod() {
  const paymentMethods = ["Cash on Delivery" , "UPI" , "Credit Card"];
  const randomIndex = Math.floor(Math.random()* paymentMethods.length);
  return paymentMethods[randomIndex];
}

function showSuccessModal() {
  const orderTotal = "₹" +getTotalPrice();

  successOrderId.textContent = getRandomOrderId();
  successDeliveryDate.textContent = getEstimatedDeliveryDate();
  successPaymentMethod.textContent = getRandomPaymentMethod();
  successTotalAmount.textContent = orderTotal;
  successOverlay.classList.add("show");
}

function closeSuccessModal() {
  successOverlay.classList.remove("show");
}
function handleCheckout() {
  if(cart.length === 0) {
    return;
  }
  
  showSuccessModal();

setTimeout(function () {
  cart = [];
  saveCart();
  updateCartView();
}, 300);
}
function renderCart(items) {
  const cartItems = items || cart;
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';

    if (totalPriceElement) {
      totalPriceElement.textContent = "₹0.00";
    }

    updateCartCount();
    updateCheckoutButton();
    return;
  }

     if (cartItems.length === 0) {
    cartList.innerHTML = '<p class="empty-cart">No matching cart items found.</p>';
    updateTotalPrice();
    updateCartCount();
    updateCheckoutButton();
    return;
  }

  cartItems.forEach(function (product) {
    const index = cart.findIndex(function (item) {
      return item.name === product.name;
    });

    const cartCard = document.createElement("div");
    cartCard.className = "cart-card";

    const cartImage = document.createElement("img");
    cartImage.className = "cart-image";
    cartImage.src = product.image;
    cartImage.alt = product.name;

    const cartInfo = document.createElement("div");
    cartInfo.className = "cart-info";

    const cartName = document.createElement("h3");
    cartName.className = "product-name";
    cartName.textContent = product.name;

    const cartProductPrice = document.createElement("p");
    cartProductPrice.className = "price";
    cartProductPrice.textContent = product.price;

    const quantityBox = document.createElement("div");
    quantityBox.className = "quantity-box";

    const decreaseButton = document.createElement("button");
    decreaseButton.className = "quantity-button";
    decreaseButton.textContent = "-";
    decreaseButton.setAttribute("type","button");

    const quantityText = document.createElement("span");
    quantityText.className = "quantity-text";
    quantityText.textContent = "Quantity: " + product.quantity;

    const increaseButton = document.createElement("button");
    increaseButton.className = "quantity-button";
    increaseButton.textContent = "+";
    increaseButton.setAttribute("type","button");

    decreaseButton.addEventListener("click",function(){
      if(cart[index].quantity > 1) {
        cart[index].quantity -=1;
        saveCart();
        updateCartView();
      }
    });

    increaseButton.addEventListener("click",function(){
      cart[index].quantity +=1;
      saveCart();
      updateCartView();
    });

    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove";
    removeButton.setAttribute("data-index",index);
    removeButton.setAttribute("type","button");

    removeButton.addEventListener("click", function () {
      cart.splice(index, 1);
      saveCart();
      renderCart();
    });

    quantityBox.appendChild(decreaseButton);
    quantityBox.appendChild(quantityText);
    quantityBox.appendChild(increaseButton);

    cartInfo.appendChild(cartName);
    cartInfo.appendChild(cartProductPrice);
    cartInfo.appendChild(quantityBox);
    cartInfo.appendChild(removeButton);

    cartCard.appendChild(cartImage);
    cartCard.appendChild(cartInfo);
    cartList.appendChild(cartCard);
  });

  updateTotalPrice();
  updateCartCount();
  updateCheckoutButton();
}
function updateCartView() {
  const searchText = searchInput.value.toLowerCase();
  const filteredCart = cart.filter(function (product) {
    return product.name.toLowerCase().includes(searchText);
  });

  renderCart(filteredCart);
}

normalizeCart();
saveCart();
updateCartView();

searchInput.addEventListener("input", updateCartView);
checkoutButton.addEventListener("click", handleCheckout);
continueButton.addEventListener("click", function(){
  closeSuccessModal();
  window.location.href = "products.html";
});
successOverlay.addEventListener("click" , function (event){
  if(event.target === successOverlay) {
    closeSuccessModal();
  }
});
