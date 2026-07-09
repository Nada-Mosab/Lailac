document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        let product = {
            name: this.getAttribute('data-name'),
            price: this.getAttribute('data-price')
        };
        
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        
        alert(product.name + " Product added to your cart!");
        updateCartCount();
    });
});

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').innerText = cart.length;
}

// Update the count when the page loads
updateCartCount();