// ageVerification.js
const ageRequirement = 21; // Set age requirement
function verifyAge(birthDate) {
    const currentDate = new Date();
    const birth = new Date(birthDate);
    const age = currentDate.getFullYear() - birth.getFullYear();
    const monthDifference = currentDate.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birth.getDate())) {
        return age - 1;
    }
    return age;
}
function isAgeValid(birthDate) {
    return verifyAge(birthDate) >= ageRequirement;
}

// productFiltering.js
const products = [
    { id: 1, name: 'Product 1', category: 'Nicotine', price: 10, nicotineLevel: 'low' },
    { id: 2, name: 'Product 2', category: 'Nicotine', price: 20, nicotineLevel: 'high' },
    { id: 3, name: 'Product 3', category: 'Non-Nicotine', price: 15, nicotineLevel: 'none' }
];
function filterProducts(criteria) {
    return products.filter(product => {
        const matchesCategory = criteria.category ? product.category === criteria.category : true;
        const matchesPrice = criteria.price ? product.price <= criteria.price : true;
        const matchesNicotine = criteria.nicotine ? product.nicotineLevel === criteria.nicotine : true;
        return matchesCategory && matchesPrice && matchesNicotine;
    });
}

// shoppingCart.js
let cart = [];
function addToCart(product) {
    cart.push(product);
}
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
}
function viewCart() {
    return cart;
}

// Example Usage
// Check age verification
const userBirthDate = '2000-01-01'; // Example birth date
console.log('Is user age valid?', isAgeValid(userBirthDate));

// Filter products
const filteredProducts = filterProducts({ category: 'Nicotine', price: 15, nicotine: 'low' });
console.log('Filtered Products:', filteredProducts);

// Shopping Cart
addToCart(products[0]);
addToCart(products[1]);
console.log('Cart:', viewCart());
