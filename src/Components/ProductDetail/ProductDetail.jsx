import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css'
import { ContextShoppingCart } from '../../Context/Context';
import { useContext } from 'react';

const ProductDetail = () =>{
    const {isProductDetailOpen, closeProductDetail, productInfo, cartProducts, setCartProducts, setCount, count} = useContext(ContextShoppingCart);
    // console.log(productInfo);

    // const addProduct = (productInfo) =>{
    //     setCount(count + 1)
    //     setCartProducts([...cartProducts + productInfo])
    // }

    return(
        <aside className={`${isProductDetailOpen ? "flex flex-col" : "hidden"} product-detail fixed border-2 border-red-300 rounded-lg bg-white mt-2`}>
                <div className='bg-red-100 flex flex-row h-13 justify-between p-3 rounded-t-lg '>
                    <h2 className="font-medium text-xl text-red-500">DETAIL</h2>
                    <div onClick={() => closeProductDetail()}>
                        <XMarkIcon className="h-6 w-6 text-red-500 cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-col items-center p-6 h-full justify-between">
                    <h3 className="mb-5 font-semibold text-lg">{productInfo.title}</h3>
                    <img src={productInfo.image} alt={productInfo.description} className="rounded mb-5 h-40"/>
                    <div className="flex flex-row items-center justify-arround">
                        <p className="font-semibold mr-3">${productInfo.price}</p>
                        <button className="bg-red-200 rounded-lg border-red-300 border-2 p-1 text-xs">AÑADIR A LA CESTA</button>
                    </div>
                </div>

        </aside>
    )
}

export {ProductDetail}