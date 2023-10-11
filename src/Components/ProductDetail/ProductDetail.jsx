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
                <div className='flex flex-row justify-between p-3 bg-red-100 rounded-t-lg h-13 '>
                    <h2 className="text-xl font-medium text-red-500">DETAIL</h2>
                    <div onClick={() => closeProductDetail()}>
                        <XMarkIcon className="w-6 h-6 text-red-500 cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between h-full p-6">
                    <h3 className="mb-5 text-lg font-semibold">{productInfo.title}</h3>
                    <img src={productInfo.image} alt={productInfo.description} className="h-40 mb-5 rounded"/>
                    <div className="flex flex-row items-center justify-arround">
                        <p className="mr-3 font-semibold">${productInfo.price}</p>
                        <button className="p-1 text-xs bg-red-200 border-2 border-red-300 rounded-lg">AÑADIR A LA CESTA</button>
                    </div>
                </div>

        </aside>
    )
}

export {ProductDetail}