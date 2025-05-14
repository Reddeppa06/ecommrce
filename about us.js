// Update cart icon count on all pages
    document.addEventListener("DOMContentLoaded", () => {
        const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        const count = cart.reduce((acc, item) => acc + item.qty, 0);
        const cartCountEl = document.getElementById("cart-count");
        if (cartCountEl) {
            cartCountEl.textContent = count;
        }
    });
