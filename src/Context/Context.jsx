import { createContext, useContext, useState } from "react";

const ContextShoppingCart = createContext();

const ShoppingCartProvider = ({children}) => {

    const [count, setCount] = useState(null);


    return (
    <ContextShoppingCart.Provider value={{count, setCount}}>
        {children}
    </ContextShoppingCart.Provider>
)}

export {ShoppingCartProvider, ContextShoppingCart}