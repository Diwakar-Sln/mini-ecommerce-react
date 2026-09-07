import { createContext, useContext, useState } from "react"

const CartContext = createContext(null);
export default function CartProvider({children}){ 
    const [cartItems, setCartItems] = useState([])
    function addToCart(productId){
        const existing = cartItems.find((item) => item.id === productId);
        if(existing){
            const updatedCartItems = cartItems.map((item) => item.id === productId ? {...item, quantity: item.quantity + 1} : item)
            setCartItems(updatedCartItems);
        }else{
            setCartItems((prev)=>[...prev, {id:productId, quantity:1}]);
        }
    }
    return <CartContext.Provider value={{addToCart, cartItems}}>{children}</CartContext.Provider>
}
export function useCart(){
    const context = useContext(CartContext);
    return context
}