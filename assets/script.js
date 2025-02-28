document.addEventListener('DOMContentLoaded', function() {
    fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            const products = data.products.slice(0, 10); // Get first 10 products
            const container = document.getElementById('products');
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                // Product Image
                const image = document.createElement('img');
                image.src = product.thumbnail;
                image.alt = product.title;

                // Product Info
                const productInfo = document.createElement('div');
                productInfo.className = 'product-info';

                const title = document.createElement('h3');
                title.textContent = product.title;

                const description = document.createElement('p');
                description.textContent = product.description;

                productInfo.appendChild(title);
                productInfo.appendChild(description);

                // Price (Updated to use a button)
                const price = document.createElement('button'); // Change from div to button
                price.className = 'price-button'; // Add the new class
                price.textContent = `$${product.price}`;

                // Rating
                const rating = document.createElement('div');
                rating.className = 'rating';
                rating.innerHTML = `
                    ${product.rating}
                    <img src="assets/img/star.png" alt="Rating">
                `;

                // Append Everything
                productCard.appendChild(image);
                productCard.appendChild(productInfo);
                productCard.appendChild(price);
                productCard.appendChild(rating);

                container.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});