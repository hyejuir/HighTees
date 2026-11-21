document.getElementById("contact-form")?.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

var quantity = 1;
var qtyText = document.getElementById("qty");


document.getElementById("minus").addEventListener("click", function () {
  if (quantity > 1) {
    quantity = quantity - 1;
    qtyText.textContent = quantity;
  }
});


document.getElementById("plus").addEventListener("click", function () {
  quantity = quantity + 1;
  qtyText.textContent = quantity;
});


function getSize() {
  return document.querySelector("input[name='size']:checked").value;
}


document.getElementById("add-to-cart").addEventListener("click", function () {
  alert("Added to cart: " + quantity + " shirt(s), size " + getSize());
});


document.getElementById("order").addEventListener("click", function () {
  alert("Thank you! Your order of " + quantity + " shirt(s), size " + getSize() + " was placed.");
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
