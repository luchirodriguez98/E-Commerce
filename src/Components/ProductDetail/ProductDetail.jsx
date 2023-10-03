import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css'
import { ContextShoppingCart } from '../../Context/Context';
import { useContext } from 'react';

const ProductDetail = () =>{
    const {isPDOpen, closePD, productInfo, cartProducts, setCartProducts, setCount, count} = useContext(ContextShoppingCart);
    // console.log(productInfo);

    const addProduct = (productInfo) =>{
        setCount(count + 1)
        setCartProducts([...cartProducts + productInfo])
        console.log(count);
    }

    return(
        <aside className={`${isPDOpen ? "flex flex-col" : "hidden"} product-detail fixed border-red-100 rounded-lg bg-white mt-2`}>
                <div className='bg-red-100 flex flex-row h-13 justify-between p-3 rounded-t-lg'>
                <h2 className="font-medium text-xl text-red-500">DETAIL</h2>
                <div onClick={() => closePD()}>
                    <XMarkIcon className="h-6 w-6 text-red-500 cursor-pointer"/>
                </div>
                </div>
                <div className="flex flex-col justify-between items-center p-6">
                    <h3 className="mb-4 font-semibold text-lg">{productInfo.title}</h3>
                    <img src={productInfo.images[1]} alt={productInfo.description} className="rounded mb-2"/>
                    <p className="font-semibold mb-2">${productInfo.price}</p>
                    <button onClick={()=>addProduct(productInfo)} className="bg-red-200 rounded-lg border-red-300 border-2 p-2 text-xs">AÑADIR A LA CESTA</button>
                </div>

        </aside>
    )
}

export {ProductDetail}