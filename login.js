document.getElementById("loginForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email && password) {
        alert("Login successful!");
      } else {
        alert("Please enter email and password.");
      }
    });
  
   // Update cart icon count on all pages
    document.addEventListener("DOMContentLoaded", () => {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const count = cart.reduce((acc, item) => acc + item.qty, 0);
        const cartCountEl = document.getElementById("cart-count");
        if (cartCountEl) {
            cartCountEl.textContent = count;
        }
    });
