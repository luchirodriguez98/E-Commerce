import { createContext, useContext, useEffect, useState } from "react";

const ContextShoppingCart = createContext();

const ShoppingCartProvider = ({children}) => {

    const [items, setItems] = useState([])
    

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
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
    const [searchValue, setSearchValue] = useState('');

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
            searchValue,
            setItems,
            openProductDetail, 
            closeProductDetail, 
            openCheckOutMenu,
            closeCheckOutMenu,
            setCount, 
            setProductInfo,
            setCartProducts,
            setOrder,
            setSearchValue}}>
        {children}
    </ContextShoppingCart.Provider>
)}

export {ShoppingCartProvider, ContextShoppingCart}