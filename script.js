document.addEventListener('DOMContentLoaded', () => {
    // Product data
    const products = [
        { id: 1, name: "Product 1", price: 20.00 },
        { id: 2, name: "Product 2", price: 57.76 },
        { id: 3, name: "Product 3", price: 29.00 },
    ];

    // Cart
    const cart = [];

    // DOM elements
    const productList = document.getElementById("product-list");
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart");
    const cartTotal = document.getElementById("cart-total");
    const totalPriceDisplay = document.getElementById("total-price");
    const checkOutBtn = document.getElementById("checkout-btn");

    // Render products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        // ✅ use backticks and include button inside
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}">Add to Cart</button>
        `;

        productList.appendChild(productDiv);
    });

    // ✅ FIXED: typo (addEventListener)
    productList.addEventListener('click', (e) => {
        if (e.target.tagName === "BUTTON") {
            const productId = parseInt(e.target.getAttribute("data-id"));
            // ✅ FIXED: use products instead of product
            const product = products.find(p => p.id === productId);
            addToCart(product);
        }
    });

    // Add to cart
    function addToCart(product) {
        cart.push(product);
        console.log(cart); // ✅ Show updated cart in console
        renderCart();
    }

    // Render the cart
    function renderCart() {
        cartItems.innerHTML = ""; // ✅ clear before rendering

        if (cart.length === 0) {
            emptyCartMessage.style.display = "block";
            cartTotal.style.display = "none";
            return;
        }

        emptyCartMessage.style.display = "none";
        cartTotal.style.display = "block";

        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);

            total += item.price;
        });

        totalPriceDisplay.textContent = total.toFixed(2);
    }
});
