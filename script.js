document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn-sm');
    const cartCountElement = document.querySelector('.cart-count');
    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = productCard.querySelector('p').innerText;

            const product = {
                name: productName,
                price: productPrice
            };

            cart.push(product);
            updateCartCount();
            
            // Optional: Visual feedback
            const originalText = e.target.innerText;
            e.target.innerText = 'Added!';
            setTimeout(() => {
                e.target.innerText = originalText;
            }, 1000);
            
            alert(`${productName} added to cart!`);
        });
    });

    function updateCartCount() {
        cartCountElement.innerText = cart.length;
    }
});
