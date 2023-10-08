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
                    <div className=' bg-red-100 flex flex-row h-12 justify-between p-3 rounded-t-lg'>
                        <h2 className="font-medium text-xl text-red-500">Cart</h2>
                        <div onClick={() => context.closeCheckOutMenu()}>
                            <XMarkIcon className="h-6 w-6 text-red-500 cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 justify-between items-center p-6 overflow-y-scroll ">
                        {
                            context.cartProducts.map(item =>(
                                <CheckOutMenuCards item = {item} key={item.id}/>
                                ))
                            } 
                    </div>
                    <div className=" relative bottom-0 px-3 w-full">
                        <div className="flex justify-between">
                            <p className="font-light">Total:</p>
                            <p className="font-medium">$ {totalPrice(context.cartProducts)}</p>
                        </div>
                        <Link to="/orders/last">
                            <button onClick={() => saveMyOrder()} className='rounded border-2 border-red-500 mb-3 mt-3 p-2 w-full'>Realizar Pedido</button>
                        </Link>
                    </div>

            </aside>
    )
}

export { CheckOutMenu }