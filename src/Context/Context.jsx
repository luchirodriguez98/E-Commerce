import { createContext, useContext, useEffect, useState } from "react";

const ContextShoppingCart = createContext();

const ShoppingCartProvider = ({children}) => {

    const [items, setItems] = useState([])
    

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=30')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => error)
    },[]);

    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
    const [isCheckOutMenuOpen, setisCheckOutMenuOpen] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const [order, setOrder] = useState([]);

    const openProductDetail = () => setisProductDetailOpen(true);
    const closeProductDetail = () => setisProductDetailOpen(false);

    const openCheckOutMenu = () => setisCheckOutMenuOpen(true);
    const closeCheckOutMenu = () => setisCheckOutMenuOpen(false);
    
    return (
    <ContextShoppingCart.Provider 
        value={
            {
            items,
            count, 
            isProductDetailOpen,
            isCheckOutMenuOpen, 
            productInfo, 
            cartProducts,
            order,
            setItems,
            openProductDetail, 
            closeProductDetail, 
            openCheckOutMenu,
            closeCheckOutMenu,
            setCount, 
            setProductInfo,
            setCartProducts,
            setOrder}}>
        {children}
    </ContextShoppingCart.Provider>
)}

export {ShoppingCartProvider, ContextShoppingCart}