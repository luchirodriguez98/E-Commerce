import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css'
import { ContextShoppingCart } from '../../Context/Context';
import { useContext } from 'react';

const ProductDetail = () =>{
    const {isProductDetailOpen, closeProductDetail, productInfo, addProduct} = useContext(ContextShoppingCart);
    // console.log(productInfo);


    return(
        <aside className={`${isProductDetailOpen ? "flex flex-col z-20" : "hidden"} product-detail fixed rounded-lg bg-white`}>
                <div className='flex flex-row-reverse p-3 rounded-t-lg h-13 '>
                    <div onClick={() => closeProductDetail()}>
                        <XMarkIcon className="items-end w-6 h-6 text-red-500 cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-row h-full p-6">
                    <div className='flex items-center justify-center mr-10 border border-gray-100 h-96 w-96'>
                        <img src={productInfo.image} alt={productInfo.description} className="h-72"/>
                    </div>
                    <div className="flex flex-col justify-between h-48 mt-3 w-96">
                        <h3 className="text-2xl ">{productInfo.title}</h3>
                        <p className="pb-5 mr-3 text-4xl font-bold border-b-2 border-gray-100">{productInfo.price}€</p>
                        <button className="w-40 h-10 p-1 text-base bg-red-200 rounded-2xl" onClick={(event) => addProduct(event, productInfo)}>Añadir al carrito</button>
                    </div>
                </div>

        </aside>
    )
}

export {ProductDetail}