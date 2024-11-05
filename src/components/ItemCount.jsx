import React, { useState } from "react"

const ItemCount = ({ addCart }) => {
    const [count, setCount] = useState(1)

    const handleIncrement = () => setCount(prev => prev + 1)
    const handleDecrement = () => setCount(prev => (prev > 1 ? prev - 1 : 1))

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={() => addCart(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
