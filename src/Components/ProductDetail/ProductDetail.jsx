import { XMarkIcon } from '@heroicons/react/24/solid'
import './ProductDetail.css'
import { ContextShoppingCart } from '../../Context/Context';
import { useContext } from 'react';

const ProductDetail = () =>{
    const context = useContext(ContextShoppingCart);


    return(
        <div className={`${context.isProductDetailOpen ? "flex justify-center items-center fixed top-0 right-0 left-0 bottom-0 h-full w-full background-transparent z-10" : "hidden"}`} onClick={()=>context.closeProductDetail()}>
            <aside className="fixed z-20 flex flex-col h-auto p-5 bg-white rounded-lg product-detail" onClick={(event)=>context.avoidCloseModal(event)}>
                <div className='flex flex-row-reverse px-2 rounded-t-lg h-13 '>
                    <div onClick={() => context.closeProductDetail()}>
                        <XMarkIcon className="items-end w-8 h-8 text-black cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-row h-full p-6">
                    <div className='flex items-center justify-center w-1/2 mr-10 border border-gray-100 h-1/2'>
                        <img src={context.productInfo.image} alt={context.productInfo.description} className="flex items-center justify-center h-full"/>
                    </div>
                    <div className="flex flex-col justify-between h-48 w-96">
                        <h3 className="text-xl ">{context.titleLarge(context.productInfo.title)}</h3>
                        <p className="pb-5 mb-3 mr-3 text-4xl font-bold border-b-2 border-gray-100">{context.productInfo.price}€</p>
                        <button className="w-40 h-10 p-1 text-base bg-red-200 rounded-2xl" onClick={(event) => context.addProduct(event, context.productInfo)}>Añadir al carrito</button>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export {ProductDetail}