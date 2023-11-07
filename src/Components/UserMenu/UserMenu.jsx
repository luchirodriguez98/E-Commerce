import { useContext } from "react"
import { ContextShoppingCart } from "../../Context/Context"
import { NavLink } from "react-router-dom"
import './UserMenu.css'

const UserMenu = () => {
    
    const context = useContext(ContextShoppingCart)


    return(
    <li onClick={()=>context.toggleMenu(context.setIsMenuUserOpen, context.setisMenuCategoriesOpen)} className={`${context.user && context.userVisible ? "block font-semibold relative cursor-pointer" : "hidden"}`}>
            Hola {context.user}
            <ul className={`${context.isMenuUserOpen ? "flex flex-col fixed menu-position h-40 justify-between border-2 border-gray-100 z-10 bg-white px-10 py-5 text-right" : "hidden"}`}>
                <li className="text-lg font-bold">
                {context.user}
                </li>
                <li className="font-light">
                        <NavLink
                            to="/orders"
                        >
                            Mis Pedidos
                        </NavLink>
                </li>
                <li className="font-light">
                    <NavLink
                        to="/account"
                    >
                        Mi cuenta
                    </NavLink>
                </li>
            </ul>
    </li>
    )
}

export {UserMenu}