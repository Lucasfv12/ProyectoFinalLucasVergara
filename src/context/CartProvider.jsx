import { createContext, useState } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (product, quantity) => {
        const productInCart = isInCart(product.id)
        let cartUpdated = [...cart]

        if (productInCart) {
            cartUpdated = cart.map(cartProduct => {
                if (cartProduct.id === product.id) {
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + quantity
                    }
                }
                return cartProduct
            });
        } else {
            cartUpdated.push({ ...product, quantity })
        }

        setCart(cartUpdated)
    }

    const removeItem = (productId) => {
        const cartUpdated = cart.filter(cartProduct => cartProduct.id !== productId)
        setCart(cartUpdated)
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (productId) => {
        return cart.some(cartProduct => cartProduct.id === productId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
