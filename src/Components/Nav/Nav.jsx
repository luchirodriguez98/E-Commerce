import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";
import { ContextShoppingCart } from "../../Context/Context";
import { useContext } from "react";
import logo from '../../../assets/logo.png'
import { totalPrice } from '../../Utils/Utils';
import { CategoriesMenu } from '../CategoriesMenu/CategoriesMenu';

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
        <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-5 py-3 text-sm font-light bg-white border-b-2 border-gray-100">
            {/* parte derecha */}
            <ul className="flex items-center gap-x-2">
                <li className="text-xl font-bold text-yellow-400">
                    <NavLink
                        to="/"
                    >
                        <img src={logo} className='w-32 outline-none'></img>
                    </NavLink>
                </li>
                <li>
                    <div className="flex flex-row justify-around px-3 ml-3 text-gray-400 bg-gray-100 border border-gray-400 h-9 rounded-xl w-44">
                    <input onChange={(e)=>context.setSearchValue(e.target.value)} value={context.searchValue} placeholder="Buscar productos..." className='w-3/4 bg-gray-100 border-none outline-none'></input>
                    <MagnifyingGlassIcon className='items-center w-5 h-9'/>
                    </div>
                </li>
                <CategoriesMenu />
                {/* <li onClick={context.openMenuCategories()} className='cursor-pointer'>
                    Categories
                    <ul className={`${context.isMenuCategoriesOpen ? "flex fixed top-0 right-0 left-0 bottom-0 h-full w-full background-transparent z-10" : "hidden"}`}>
                        <li>
                            <NavLink
                                to="/clothes"
                            >
                                Moda
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/electronics"
                            >
                                Electronica
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/jewelery"
                            >
                                Joyeria
                            </NavLink>
                        </li>
                    </ul>
                </li> */}
            </ul>
            {/* parte izquierda */}
            <ul className="flex items-center justify-between gap-x-2">
                <li>
                    <NavLink
                        to="/orders"
                    >
                        Mis Pedidos
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to="/account"
                    >
                        My Account
                    </NavLink>
                </li> */}
                <li >
                    <NavLink 
                        className='flex flex-row'
                        to="/login"
                    >
                        Hola Lucia
                        <ChevronDownIcon className='w-4'/>
                    </NavLink>
                </li>
                <li className="flex flex-row items-center justify-between w-24 h-10 px-3 py-2 rounded-lg cursor-pointer bg-slate-200" onClick={() => isCartOpen() }>
                        <ShoppingCartIcon className="w-6 h-6 text-red-300" />
                        <div className=''>
                        {totalPrice(context.cartProducts)}€
                        </div>
                </li>
                
            </ul>
        </nav>
        
    )
}

export { Nav }