import { useState } from 'react'
import cartImage from '../assets/Cart.svg'


const CartWidget = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prevCount => prevCount + 1)
    }

  return (
    <div style={{display:"flex", alignItems:"center"}}>
        <img src={cartImage} alt="Carrito" onClick={handleClick} style={{cursor: "pointer", width: "50px", height: "50px", alignItems:"end"}} />
        <span style={{marginLeft: "10px", fontSize: "20px"}}>{count}</span>
      
    </div>
  )
}

export default CartWidget
