import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, productQuantity) => { 
        const productInCart = isInCart(product.id);
        let cartUpdated = [...cart];

        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return { ...cartProduct, quantity: cartProduct.quantity + productQuantity };
                }
                return cartProduct;
            });
        } else {
            cartUpdated.push({ ...product, quantity: productQuantity });
        }

        setCart(cartUpdated);
    };

    const isInCart = (productId) => cart.some(cartProduct => cartProduct.id === productId);

    const removeItem = (productId) => {
        setCart(cart.filter(cartProduct => cartProduct.id !== productId));
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;



