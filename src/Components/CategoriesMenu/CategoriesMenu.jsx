import { useContext } from "react"
import { ContextShoppingCart } from "../../Context/Context"
import { NavLink } from "react-router-dom"
import './CategoriesMenu.css'

const CategoriesMenu = () => {
    
    const context = useContext(ContextShoppingCart)

    const toggleMenu = () =>{
        context.setisMenuCategoriesOpen((oldStatus)=>!oldStatus)
    }

    return(
    <li onClick={()=>toggleMenu()} className='relative cursor-pointer'>
        Categories
        <ul className={`${context.isMenuCategoriesOpen ? "flex flex-col fixed menu-position h-40 justify-between border-2 border-gray-100 z-10 bg-white p-5" : "hidden"}`}>
        <li className="">
                <NavLink
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li className="">
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
        </li>
    )
}

export {CategoriesMenu}