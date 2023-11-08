import { useContext } from 'react';
import { ContextShoppingCart } from '../../Context/Context';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { CheckOutMenuCards } from '../CheckOutMenuCards/CheckOutMenuCards';
import { totalPrice } from '../../Utils/Utils';
import './CheckOutMenu.css';
import '../../Pages/background-modal.css'
import { Link } from 'react-router-dom';

const CheckOutMenu = () =>{
    
    const context = useContext(ContextShoppingCart);

    const buttonToRender = () =>{
        if(!context.user && context.cartProducts.length <= 0 || context.user && context.cartProducts.length <= 0){
            return <button className='w-full p-2 mt-3 mb-3 border-2 border-red-100 rounded'>Añade productos a tu carrito</button>
        }if(context.user){
            return <button onClick={() => context.saveOrderData()} className='w-full p-2 mt-3 mb-3 bg-red-500 rounded'>Realizar Pedido</button>
        }if(!context.user){return(
            <Link to="/login">
                <button onClick={context.closeCheckOutMenu} className='w-full p-2 mt-3 mb-3 bg-red-500 rounded'>Inicia sesion</button>
            </Link>
        )}
    }

    return(
        <div className={`${context.isCheckOutMenuOpen ? "flex justify-center items-center fixed top-0 right-0 left-0 bottom-0 h-full w-full background-transparent z-10" : "hidden"}`} onClick={()=>context.closeCheckOutMenu()}>
            <aside className="fixed top-0 z-20 flex flex-col h-full bg-white checkout-menu" onClick={(event)=>context.avoidCloseModal(event)}>
                    <div className='flex flex-row items-center px-5 pt-6 pb-5'>
                        <div onClick={() => context.closeCheckOutMenu()}>
                            <XMarkIcon className="w-6 h-6 mr-5 text-xl font-bold cursor-pointer"/>
                        </div>
                        <h2 className="text-xl font-semibold text-black">Carrito</h2>
                    </div>
                    <div className="flex flex-col flex-1 px-3 overflow-x-hidden overflow-y-scroll border-gray-100 border-y-2 ">
                        {
                            context.cartProducts.length <= 0 
                            ? <p className='flex items-center justify-center h-full'>No hay ningun articulo al carrito</p>
                            : context.cartProducts.map(item =>(
                                <CheckOutMenuCards item = {item} key={item.id}/>
                                ))
                            } 
                    </div>
                    <div className="relative bottom-0 w-full px-3 mt-3 ">
                        <div className="flex justify-between">
                            <p className="text-lg font-light">Total</p>
                            <p className="text-2xl font-bold">{totalPrice(context.cartProducts)}€</p>
                        </div>
                            {buttonToRender()}
                    </div>

            </aside>
        </div>
    )
}

export { CheckOutMenu }