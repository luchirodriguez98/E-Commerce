import { createContext, useEffect, useState } from "react";
import { totalPrice } from "../Utils/Utils";

const ContextShoppingCart = createContext();

// eslint-disable-next-line react/prop-types
const ShoppingCartProvider = ({children}) => {

    
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => error)
    },[]);
    
    const [items, setItems] = useState([])
    const [count, setCount] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false);
    const [isOrderDataOpen, setisOrderDataOpen] = useState(false);
    const [isCheckOutMenuOpen, setisCheckOutMenuOpen] = useState(false);
    const [productInfo, setProductInfo] = useState({});
    const [order, setOrder] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [directionValue, setDirectionValue] = useState('');

    const openProductDetail = () => setisProductDetailOpen(true);
    const closeProductDetail = () => setisProductDetailOpen(false);

    const openOrderData = () => setisOrderDataOpen(true);
    const closeOrderData = () => setisOrderDataOpen(false);

    const openCheckOutMenu = () => setisCheckOutMenuOpen(true);
    const closeCheckOutMenu = () => setisCheckOutMenuOpen(false);

    const saveInfo = (item)=>{
        closeCheckOutMenu() 
        openProductDetail() 
        setProductInfo(item)

    }
    const addProduct = (event, item) =>{
        event.stopPropagation();
        setCount(count + 1)
        setCartProducts([...cartProducts, item])
        openCheckOutMenu() 
        closeProductDetail() 
    }
    const saveMyOrder= (directionUser) =>{
        const savedOrder = {
            date: new Date(),
            product: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
            direction: directionUser,
            pay: 'cash',
        };
        closeOrderData();
        setOrder([...order, savedOrder]);
        setCartProducts([]);
    }
    const saveOrderData = ()=>{
        closeCheckOutMenu() 
        openOrderData() 
    }
    
    return (
    <ContextShoppingCart.Provider 
        value={
            {
            items,
            count, 
            isProductDetailOpen,
            isCheckOutMenuOpen, 
            isOrderDataOpen,
            productInfo, 
            cartProducts,
            order,
            searchValue,
            directionValue,
            setItems,
            openProductDetail, 
            closeProductDetail, 
            openCheckOutMenu,
            closeCheckOutMenu,
            openOrderData,
            closeOrderData,
            setCount, 
            setProductInfo,
            setCartProducts,
            setOrder,
            setSearchValue,
            setDirectionValue,
            saveInfo,
            addProduct,
            saveMyOrder,
            saveOrderData}}>
        {children}
    </ContextShoppingCart.Provider>
)}

export {ShoppingCartProvider, ContextShoppingCart}