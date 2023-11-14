import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { NavLink } from "react-router-dom";
import { ContextShoppingCart } from "../../Context/Context";
import { useContext } from "react";
import logo from '../../../assets/logo.png'
import { totalPrice } from '../../Utils/Utils';
import { CategoriesMenu } from '../CategoriesMenu/CategoriesMenu';
import { UserMenu } from '../UserMenu/UserMenu';

const Nav = () =>{


    const context = useContext(ContextShoppingCart);

    // const user = context.user && context.userVisible ? `Hola ${context.user}` : 'Inicia sesion';

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
            </ul>
            {/* parte izquierda */}
            <ul className="flex items-center justify-between gap-x-2">
                <CategoriesMenu />
                <UserMenu />
                <li onClick={()=>context.setisMenuCategoriesOpen(false)}>
                    <NavLink 
                        className={`${context.user && !context.userVisible || !context.user && !context.userVisible ? "block font-semibold" : "hidden"}`}
                        to="/login"
                    >
                        Inicia sesion
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