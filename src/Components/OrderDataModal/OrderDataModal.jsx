import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextShoppingCart } from '../../Context/Context';
import { XMarkIcon } from '@heroicons/react/24/solid'
import './OrderDataModal.css'
import '../../Pages/background-modal.css'

import { FormDirection } from '../FormDirection/FormDirection'


const OrderDataModal = () =>{
    const context = useContext(ContextShoppingCart);


    return(
        <div onClick={()=>context.closeOrderData()} className={`${context.isOrderDataOpen ? "flex justify-center items-center fixed top-0 right-0 left-0 bottom-0 h-full w-full background-transparent z-10" : "hidden"}`}>
            <aside onClick={(event)=>context.avoidCloseModal(event)} className="fixed z-20 flex flex-col h-auto gap-5 p-5 bg-white rounded-lg product-detail"> 
                <div className='flex flex-row justify-between rounded-t-lg h-13 '>
                    <h1 className='text-2xl font-semibold'>Informacion del pedido</h1>
                    <div onClick={() => context.closeOrderData()} className="flex items-center justify-center">
                        <XMarkIcon className="w-6 h-6 text-black cursor-pointer"/>
                    </div>
                </div>
                <div className="flex flex-col justify-between h-3/4">
                        <h2 className="text-xl" >Dirección de entrega para este pedido</h2>
                        <FormDirection />
                </div>
            </aside>
        </div>
    )
}

export {OrderDataModal}