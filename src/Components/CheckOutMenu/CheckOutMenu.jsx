import { XMarkIcon } from '@heroicons/react/24/solid'
import './CheckOutMenu.css';
import { ContextShoppingCart } from '../../Context/Context';
import { useContext } from 'react';
import { CheckOutMenuCards } from '../CheckOutMenuCards/CheckOutMenuCards';

const CheckOutMenu = () =>{
    const context = useContext(ContextShoppingCart);

    return(
            <aside className={`${context.isCheckOutMenuOpen ? "flex flex-col" : "hidden"} checkout-menu overflow-y-scroll fixed border-2 border-red-300 rounded-lg bg-white mt-2`}>
                    <div className='bg-red-100 flex flex-row h-12 justify-between p-3 rounded-t-lg'>
                        <h2 className="font-medium text-xl text-red-500">Cart</h2>
                        <div onClick={() => context.closeCheckOutMenu()}>
                            <XMarkIcon className="h-6 w-6 text-red-500 cursor-pointer"/>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-center p-6">
                        {
                            context.cartProducts.map(item =>(
                                <CheckOutMenuCards item = {item} key={item.id}/>
                                ))
                            } 
                    </div>

            </aside>
    )
}

export { CheckOutMenu }