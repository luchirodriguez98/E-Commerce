import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";
import { ContextShoppingCart } from "../../Context/Context";
import { useContext } from "react";

const Nav = () =>{


    const context = useContext(ContextShoppingCart);
    
    const isCartOpen = () =>{
        if(context.isCheckOutMenuOpen === false){
            context.openCheckOutMenu()
        }else{
            console.log('cart abierta');
            context.closeCheckOutMenu()
        }
    }

    return(
        <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-5 py-5 text-sm font-light bg-red-100">
            {/* parte derecha */}
            <ul className="flex items-center gap-x-2">
                <li className="text-xl font-bold text-yellow-400">
                    <NavLink
                        to="/"
                    >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furniture"
                    >
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* parte izquierda */}
            <ul className="flex items-center justify-between gap-x-2">
                <li className="text-gray-300">
                    luchirodriguez98@gmail.com
                </li>
                <li>
                    <NavLink
                        to="/orders"
                    >
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/account"
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                    >
                        Sign Out
                    </NavLink>
                </li>
                <li className="flex flex-row items-center" onClick={() => isCartOpen() }>
                    <NavLink to="/">
                        <ShoppingCartIcon className="w-6 h-6 text-red-300" />
                        <div>
                        {context.count}
                        </div>
                    </NavLink>
                </li>
                
            </ul>
        </nav>
        
    )
}

export { Nav }