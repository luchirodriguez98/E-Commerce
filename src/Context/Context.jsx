import { createContext, useContext, useState } from "react";

const ContextShoppingCart = createContext();

const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [isPDOpen, setisPDOpen] = useState(false);
    const [productInfo, setProductInfo] = useState({});

    const openPD = () => setisPDOpen(true);
    const closePD = () => setisPDOpen(false);
    return (
    <ContextShoppingCart.Provider 
        value={
            {count, 
            isPDOpen, 
            productInfo, 
            cartProducts,
            openPD, 
            closePD, 
            setCount, 
            setProductInfo,
            setCartProducts}}>
        {children}
    </ContextShoppingCart.Provider>
)}

export {ShoppingCartProvider, ContextShoppingCart}