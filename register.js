document.querySelector(".submit-btn").addEventListener("click", (e) => {
  const name = document.querySelector("input[type='text']").value;
  const email = document.querySelector("input[type='email']").value;
  const password = document.querySelector("input[type='password']").value;

  if (!name || !email || !password) {
    alert("Please fill all fields!");
    return;
  }

  if (!email.includes("@")) {
    alert("Enter a valid email address.");
    return;
  }

  alert("Registered successfully!");
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