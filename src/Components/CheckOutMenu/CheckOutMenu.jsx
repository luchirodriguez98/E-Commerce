import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextShoppingCart } from '../../Context/Context';
import { XMarkIcon } from '@heroicons/react/24/solid'
import { CheckOutMenuCards } from '../CheckOutMenuCards/CheckOutMenuCards';
import { totalPrice } from '../../Utils/Utils';
import './CheckOutMenu.css';

const CheckOutMenu = () =>{
    const context = useContext(ContextShoppingCart);

    const saveMyOrder= () =>{
        const savedOrder = {
            date: new Date(),
            product: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        };
        context.setOrder([...context.order, savedOrder])
        context.setCartProducts([])
    }

    return(
            <aside className={`${context.isCheckOutMenuOpen ? "flex flex-col" : "hidden"} checkout-menu fixed border-2 border-red-300 rounded-lg bg-white mt-2`}>
                    <div className='flex flex-row justify-between h-12 p-3 bg-red-100 rounded-t-lg '>
                        <h2 className="text-xl font-medium text-red-500">Cart</h2>
                        <div onClick={() => context.closeCheckOutMenu()}>
                            <XMarkIcon className="w-6 h-6 text-red-500 cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between flex-1 p-6 overflow-y-scroll ">
                        {
                            context.cartProducts.map(item =>(
                                <CheckOutMenuCards item = {item} key={item.id}/>
                                ))
                            } 
                    </div>
                    <div className="relative bottom-0 w-full px-3 ">
                        <div className="flex justify-between">
                            <p className="font-light">Total:</p>
                            <p className="font-medium">$ {totalPrice(context.cartProducts)}</p>
                        </div>
                        <Link to="/orders/last">
                            <button onClick={() => saveMyOrder()} className='w-full p-2 mt-3 mb-3 border-2 border-red-500 rounded'>Realizar Pedido</button>
                        </Link>
                    </div>

            </aside>
    )
}

export { CheckOutMenu }