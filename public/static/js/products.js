// Products page functionality

// Load products from API
async function loadProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    try {
        productsGrid.innerHTML = '<div class="col-span-full flex justify-center py-20"><div class="spinner"></div></div>';
        
        const response = await axios.get('/api/products');
        const products = response.data;
        
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card rounded-2xl overflow-hidden">
                <div class="relative h-64 overflow-hidden">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">
                </div>
                <div class="p-6">
                    <h3 class="text-2xl font-orbitron font-bold mb-2">${product.name}</h3>
                    <p class="text-gray-400 mb-4">${product.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-primary">${product.price}</span>
                        <button onclick="viewProduct(${product.id})" class="bg-primary text-dark px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition">
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
    } catch (error) {
        console.error('Error loading products:', error);
        productsGrid.innerHTML = `
            <div class="col-span-full text-center py-20">
                <i class="fas fa-exclamation-circle text-6xl text-primary mb-4"></i>
                <p class="text-gray-400 text-lg">Failed to load products. Please try again later.</p>
            </div>
        `;
    }
}

// View product details
async function viewProduct(productId) {
    try {
        const response = await axios.get('/api/products');
        const product = response.data.find(p => p.id === productId);
        
        if (product) {
            const modalContent = document.getElementById('modal-content');
            modalContent.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 object-cover rounded-lg mb-6">
                <h2 class="text-3xl font-orbitron font-bold mb-4">${product.name}</h2>
                <p class="text-gray-400 text-lg mb-6">${product.description}</p>
                
                <div class="bg-gray-900 rounded-lg p-6 mb-6">
                    <h3 class="font-orbitron font-bold text-xl mb-4">What's Included:</h3>
                    <ul class="space-y-2 text-gray-400">
                        <li><i class="fas fa-check text-primary mr-2"></i>Complete kit with all components</li>
                        <li><i class="fas fa-check text-primary mr-2"></i>Detailed documentation and tutorials</li>
                        <li><i class="fas fa-check text-primary mr-2"></i>Online support and community access</li>
                        <li><i class="fas fa-check text-primary mr-2"></i>Free software and code samples</li>
                    </ul>
                </div>
                
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-orbitron font-bold text-primary">${product.price}</span>
                    <button onclick="addToCart(${product.id})" class="bg-primary text-dark px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition">
                        <i class="fas fa-shopping-cart mr-2"></i>Add to Cart
                    </button>
                </div>
            `;
            
            openModal('product-modal');
        }
    } catch (error) {
        console.error('Error viewing product:', error);
        showNotification('Failed to load product details', 'error');
    }
}

// Add to cart functionality
function addToCart(productId) {
    // In production, implement actual cart functionality
    showNotification('Product added to cart! Please login to continue.', 'success');
    closeModal('product-modal');
    setTimeout(() => {
        window.location.href = '/login';
    }, 2000);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});
