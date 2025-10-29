
     // Sample Product Data
        const products = [
            {
                id: 1,
                name: "Wireless Bluetooth Earbuds",
                price: 450,
                originalPrice: 650,
                image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
                category: "Electronics",
                rating: 4.5,
                reviews: 128,
                inStock: true
            },
            {
                id: 2,
                name: "Smart Watch Pro Series",
                price: 890,
                originalPrice: 1200,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
                category: "Electronics",
                rating: 4.8,
                reviews: 245,
                inStock: true
            },
            {
                id: 3,
                name: "Premium Leather Handbag",
                price: 680,
                originalPrice: 950,
                image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
                category: "Fashion",
                rating: 4.6,
                reviews: 89,
                inStock: true
            },
            {
                id: 4,
                name: "LED Ring Light with Stand",
                price: 320,
                originalPrice: 480,
                image: "https://images.unsplash.com/photo-1557180295-76eee20ae8aa?w=400&h=400&fit=crop",
                category: "Electronics",
                rating: 4.4,
                reviews: 156,
                inStock: true
            },
            {
                id: 5,
                name: "Portable Power Bank 20000mAh",
                price: 280,
                originalPrice: 400,
                image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop",
                category: "Electronics",
                rating: 4.7,
                reviews: 312,
                inStock: true
            },
            {
                id: 6,
                name: "Stainless Steel Water Bottle",
                price: 150,
                originalPrice: 220,
                image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
                category: "Home",
                rating: 4.3,
                reviews: 67,
                inStock: true
            },
            {
                id: 7,
                name: "Fitness Resistance Bands Set",
                price: 180,
                originalPrice: 280,
                image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop",
                category: "Sports",
                rating: 4.5,
                reviews: 134,
                inStock: true
            },
            {
                id: 8,
                name: "Wireless Gaming Mouse",
                price: 350,
                originalPrice: 500,
                image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop",
                category: "Electronics",
                rating: 4.6,
                reviews: 201,
                inStock: true
            },
            {
                id: 9,
                name: "Men's Fashion Sneakers",
                price: 420,
                originalPrice: 600,
                image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
                category: "Fashion",
                rating: 4.7,
                reviews: 178,
                inStock: true
            },
            {
                id: 10,
                name: "Portable Bluetooth Speaker",
                price: 380,
                originalPrice: 550,
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
                category: "Electronics",
                rating: 4.5,
                reviews: 156,
                inStock: true
            },
            {
                id: 11,
                name: "Luxury Makeup Brush Set",
                price: 250,
                originalPrice: 380,
                image: "https://images.unsplash.com/photo-1583241800698-e8f1204f2e44?w=400&h=400&fit=crop",
                category: "Beauty",
                rating: 4.8,
                reviews: 223,
                inStock: true
            },
            {
                id: 12,
                name: "Yoga Mat with Carrying Strap",
                price: 180,
                originalPrice: 280,
                image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop",
                category: "Sports",
                rating: 4.4,
                reviews: 98,
                inStock: true
            }
        ];

        let cart = [];
        let wishlist = [];
        let currentFilter = 'All';
        let currentSort = 'featured';

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            displayProducts(products);
            updateCartCount();
            updateWishlistCount();
        });

        // Display Products
        function displayProducts(productsToDisplay) {
            const grid = document.getElementById('productsGrid');
            grid.innerHTML = '';

            productsToDisplay.forEach(product => {
                const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
                const isInWishlist = wishlist.some(item => item.id === product.id);

                const productCard = `
                    <div class="product-card">
                        <div class="product-image">
                            <img src="${product.image}" alt="${product.name}">
                            <span class="discount-badge">-${discount}%</span>
                            <button class="wishlist-btn ${isInWishlist ? 'active' : ''}" onclick="toggleWishlistItem(${product.id})">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                        <div class="product-info">
                            <div class="product-category">${product.category}</div>
                            <div class="product-name">${product.name}</div>
                            <div class="product-rating">
                                <div class="stars">
                                    ${getStarRating(product.rating)}
                                </div>
                                <span class="reviews">(${product.reviews})</span>
                            </div>
                            <div class="product-price">
                                <span class="current-price">GH₵${product.price}</span>
                                <span class="original-price">GH₵${product.originalPrice}</span>
                            </div>
                            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                                <i class="fas fa-shopping-cart"></i> Add to Cart
                            </button>
                        </div>
                    </div>
                `;
                grid.innerHTML += productCard;
            });
        }

        // Generate Star Rating
        function getStarRating(rating) {
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 >= 0.5 ? 1 : 0;
            const emptyStars = 5 - fullStars - halfStar;
            
            let stars = '';
            for (let i = 0; i < fullStars; i++) stars += '<i class="fas fa-star"></i>';
            if (halfStar) stars += '<i class="fas fa-star-half-alt"></i>';
            for (let i = 0; i < emptyStars; i++) stars += '<i class="far fa-star"></i>';
            
            return stars;
        }

        // Add to Cart
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            updateCart();
            updateCartCount();
            showNotification('Product added to cart!');
        }

        // Update Cart Display
        function updateCart() {
            const cartContainer = document.getElementById('cartItemsContainer');
            
            if (cart.length === 0) {
                cartContainer.innerHTML = `
                    <div class="empty-cart">
                        <i class="fas fa-shopping-cart"></i>
                        <h3>Your cart is empty</h3>
                        <p>Start adding some products!</p>
                    </div>
                `;
            } else {
                cartContainer.innerHTML = '';
                cart.forEach(item => {
                    const cartItem = `
                        <div class="cart-item">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                            <div class="cart-item-info">
                                <div class="cart-item-name">${item.name}</div>
                                <div class="cart-item-price">GH₵${item.price}</div>
                                <div class="cart-item-quantity">
                                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                                    <span>${item.quantity}</span>
                                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                                </div>
                            </div>
                            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    `;
                    cartContainer.innerHTML += cartItem;
                });
            }

            updateCartTotal();
        }

        // Update Quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCart();
                    updateCartCount();
                }
            }
        }

        // Remove from Cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
            updateCartCount();
            showNotification('Product removed from cart');
        }

        // Update Cart Count
        function updateCartCount() {
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartCount').textContent = totalItems;
            document.getElementById('cartItemCount').textContent = totalItems;
        }

        // Update Cart Total
        function updateCartTotal() {
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('cartTotal').textContent = total.toFixed(2);
        }

        // Toggle Cart Sidebar
        function toggleCart() {
            const cartSidebar = document.getElementById('cartSidebar');
            cartSidebar.classList.toggle('open');
        }

        // Wishlist Functions
        function toggleWishlistItem(productId) {
            const existingIndex = wishlist.findIndex(item => item.id === productId);
            
            if (existingIndex > -1) {
                wishlist.splice(existingIndex, 1);
                showNotification('Removed from wishlist');
            } else {
                const product = products.find(p => p.id === productId);
                wishlist.push(product);
                showNotification('Added to wishlist');
            }

            updateWishlistCount();
            displayProducts(getFilteredProducts());
        }

        function updateWishlistCount() {
            document.getElementById('wishlistCount').textContent = wishlist.length;
        }

        function toggleWishlist() {
            alert('Wishlist feature - Coming soon! Your saved items: ' + wishlist.length);
        }

        // Filter Products
        function filterByCategory(category) {
            currentFilter = category;
            
            // Update active button
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            const filtered = getFilteredProducts();
            displayProducts(filtered);
        }

        function getFilteredProducts() {
            let filtered = currentFilter === 'All' 
                ? products 
                : products.filter(p => p.category === currentFilter);

            // Apply search if there's a query
            const searchQuery = document.getElementById('searchInput').value.toLowerCase();
            if (searchQuery) {
                filtered = filtered.filter(p => 
                    p.name.toLowerCase().includes(searchQuery) ||
                    p.category.toLowerCase().includes(searchQuery)
                );
            }

            return sortProductsArray(filtered, currentSort);
        }

        // Search Products
        function searchProducts() {
            const filtered = getFilteredProducts();
            displayProducts(filtered);
        }

        // Allow Enter key for search
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });

        // Sort Products
        function sortProducts(sortType) {
            currentSort = sortType;
            const filtered = getFilteredProducts();
            displayProducts(filtered);
        }

        function sortProductsArray(productsArray, sortType) {
            const sorted = [...productsArray];
            
            switch(sortType) {
                case 'price-low':
                    return sorted.sort((a, b) => a.price - b.price);
                case 'price-high':
                    return sorted.sort((a, b) => b.price - a.price);
                case 'rating':
                    return sorted.sort((a, b) => b.rating - a.rating);
                default:
                    return sorted;
            }
        }

        // Checkout Function
        function checkout() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            alert('Checkout feature coming soon! Connect your backend to process orders.\n\nTotal: GH₵' + document.getElementById('cartTotal').textContent);
        }

        // Show Notification
        function showNotification(message) {
            // Simple alert - you can replace with a better notification system
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                z-index: 3000;
                animation: slideIn 0.3s ease;
            `;
            notification.textContent = message;
            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 2000);
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            alert('Mobile menu - You can implement a slide-out menu here');
        }

        // Smooth Scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add CSS animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }

            @keyframes slideOut {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(400px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);