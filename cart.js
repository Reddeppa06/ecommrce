  
        // document.addEventListener("DOMContentLoaded", () => {
        //     updateCartUI();
        // });

        // function updateCartUI() {
        //     const cartItemsEl = document.getElementById("cart-items");
        //     const emptyCartEl = document.getElementById("empty-cart");
        //     const orderSummaryEl = document.querySelector(".order-summary");
        //     const cartCountEl = document.getElementById("cart-count");
        //     const totalProductsEl = document.getElementById("total-products");
        //     const productTotalEl = document.getElementById("product-total");
        //     const totalAmountEl = document.getElementById("total-amount");

        //     let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
        //     cartItemsEl.innerHTML = "";
        //     let total = 0;

        //     if (cart.length === 0) {
        //         emptyCartEl.style.display = "block";
        //         cartItemsEl.style.display = "none";
        //         orderSummaryEl.style.display = "none";
        //     } else {
        //         emptyCartEl.style.display = "none";
        //         cartItemsEl.style.display = "block";
        //         orderSummaryEl.style.display = "block";

        //         cart.forEach((item, index) => {
        //             total += item.price * item.qty;

        //             const itemEl = document.createElement("div");
        //             itemEl.className = "cart-item";
        //             itemEl.innerHTML = `
        //                 <img src="${item.image}" width="50" />
        //                 <div class="item-details">
        //                     <strong>${item.title}</strong>
        //                     <div class="qty">
        //                         <button onclick="changeQty(${index}, -1)">–</button>
        //                         <span>${item.qty}</span>
        //                         <button onclick="changeQty(${index}, 1)">+</button>
        //                     </div>
        //                     <div>${item.qty} × $${item.price.toFixed(2)} = $${(item.qty * item.price).toFixed(2)}</div>
        //                 </div>
        //             `;
        //             cartItemsEl.appendChild(itemEl);
        //         });
        //     }

        //     cartCountEl.textContent = cart.reduce((a, b) => a + b.qty, 0);
        //     totalProductsEl.textContent = cart.length;
        //     productTotalEl.textContent = "$" + total.toFixed(2);
        //     totalAmountEl.textContent = "$" + (total + 30).toFixed(2);
        // }

        // function changeQty(index, delta) {
        //     let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
            
        //     if (index < 0 || index >= cart.length) return;

        //     cart[index].qty += delta;

        //     if (cart[index].qty <= 0) {
        //         if (confirm("Remove item from cart?")) {
        //             cart.splice(index, 1);
        //         } else {
        //             cart[index].qty = 1;
        //         }
        //     }

        //     sessionStorage.setItem("cart", JSON.stringify(cart));
        //     updateCartUI();
        // }
        document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
});

function updateCartUI() {
    const cartItemsEl = document.getElementById("cart-items");
    const emptyCartEl = document.getElementById("empty-cart");
    const orderSummaryEl = document.querySelector(".order-summary");
    const cartCountEl = document.getElementById("cart-count");
    const totalProductsEl = document.getElementById("total-products");
    const productTotalEl = document.getElementById("product-total");
    const totalAmountEl = document.getElementById("total-amount");

    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cartItemsEl.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        emptyCartEl.style.display = "block";
        cartItemsEl.style.display = "none";
        orderSummaryEl.style.display = "none";
    } else {
        emptyCartEl.style.display = "none";
        cartItemsEl.style.display = "block";
        orderSummaryEl.style.display = "block";

        cart.forEach((item, index) => {
            total += item.price * item.qty;

            const itemEl = document.createElement("div");
            itemEl.className = "cart-item";
            itemEl.innerHTML = `
                <img src="${item.image}" width="50" />
                <div class="item-details">
                    <strong>${item.title}</strong>
                    <div class="qty">
                        <button class="minus" data-index="${index}">–</button>
                        <span>${item.qty}</span>
                        <button class="plus" data-index="${index}">+</button>
                    </div>
                    <div>${item.qty} × $${item.price.toFixed(2)} = $${(item.qty * item.price).toFixed(2)}</div>
                </div>
            `;
            cartItemsEl.appendChild(itemEl);
        });

        // Add event listeners dynamically for buttons
        document.querySelectorAll(".plus").forEach(button => {
            button.addEventListener("click", () => changeQty(parseInt(button.dataset.index), 1));
        });

        document.querySelectorAll(".minus").forEach(button => {
            button.addEventListener("click", () => changeQty(parseInt(button.dataset.index), -1));
        });
    }

    cartCountEl.textContent = cart.reduce((a, b) => a + b.qty, 0);
    totalProductsEl.textContent = cart.length;
    productTotalEl.textContent = "$" + total.toFixed(2);
    totalAmountEl.textContent = "$" + (total + 30).toFixed(2);
}

function changeQty(index, delta) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    if (index < 0 || index >= cart.length) return;

    cart[index].qty += delta;

    // Remove item if quantity reaches zero
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}


