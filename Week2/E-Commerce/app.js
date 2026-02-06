import { 
    getAllProducts, 
    searchProducts, 
    getProductsByCategory 
    } from './product.js'
    
    import { 
    addToCart, 
    getCartItems, 
    getCartTotal, 
    updateQuantity,
    removeFromCart 
    } from './cart.js'
    
    import { processPayment } from './payment.js'
    
    console.log('E-Commerce Store\n')
    
    // 1. Browse products
    console.log('All Products:')
    console.log(getAllProducts())
    
    // 2. Search for products
    console.log('\nSearching for "phone":')
    console.log(searchProducts('phone'))
    
    // 3. Add items to cart
    console.log('\nAdding to Cart')
    console.log(addToCart(1, 2))  // 2 Laptops
    console.log(addToCart(3, 3))  // 3 Headphones
    console.log(addToCart(1, 1))  // 1 more Laptop (to update quantity)
    
    // 4. View cart
    console.log('\nCurrent Cart')
    console.log(getCartItems())
    console.log('Cart Total:', getCartTotal())
    
    // 5. Update quantity
    console.log('\nUpdating Quantities')
    console.log(updateQuantity(1, 2));  // Changing laptop quantity to 2
    
    // 6. Remove item
    console.log('\nRemoving Item');
    console.log(removeFromCart(3));  // Removing headphones
    
    // 7. View updated cart
    console.log('\nUpdated Cart');
    console.log(getCartItems());
    console.log('Cart Total:', getCartTotal());
    
    // 8. Checkout with coupon
    console.log('\nCheckout');
    const order = processPayment('upi', 'WELCOME10');
    console.log(order);
                      