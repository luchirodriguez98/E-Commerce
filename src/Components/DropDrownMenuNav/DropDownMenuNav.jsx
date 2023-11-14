import { useContext } from "react"
import { ContextShoppingCart } from "../../Context/Context"
import { NavLink } from "react-router-dom"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import './CategoriesMenu.css'


const DropDownManuNav = () => {
    
    const context = useContext(ContextShoppingCart)

    const enter = (event) =>{
        if (event.key === 'Enter') {
            context.menuToggle(context.setisDropDownMenuOpen)
        }
    }

    return(
        <div className={`${context.isDropDownMenuOpen ? "flex fixed text-right z-10 flex-col justify-between w-full p-5 bg-white border-2 border-gray-100 menu-position" : "hidden"}`}>
        <ul className="flex flex-col items-end w-full">
            <li>
                <div className="flex flex-row justify-around w-full px-3 ml-3 text-gray-400 bg-gray-100 rounded-md">
                <input onKeyDown={()=>enter(event)}  onChange={(e)=>context.setSearchValue(e.target.value)} value={context.searchValue} placeholder="Buscar productos..." className='w-3/4 bg-gray-100 border-none outline-none'></input>
                <MagnifyingGlassIcon className='items-center w-5 h-9'/>
                </div>
            </li>
        </ul>
        <ul className="flex flex-col items-end w-full gap-1 mt-5 mb-5">
            <li className="text-lg font-bold">
                Categorias
            </li>
            <li onClick={()=>context.menuToggle(context.setisDropDownMenuOpen)}>
                <NavLink
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li onClick={()=>context.menuToggle(context.setisDropDownMenuOpen)}>
                <NavLink
                    to="/clothes"
                >
                    Moda
                </NavLink>
            </li>
            <li onClick={()=>context.menuToggle(context.setisDropDownMenuOpen)}> 
                <NavLink
                    to="/electronics"
                >
                    Electronica
                </NavLink>
            </li>
            <li onClick={()=>context.menuToggle(context.setisDropDownMenuOpen)}>
                <NavLink
                    to="/jewelery"
                >
                    Joyeria
                </NavLink>
            </li>
        </ul>
        <ul className="flex flex-col items-end justify-between w-full gap-1">
            <li className="text-lg font-bold">
                Usuario
            </li>
            <li className="font-light" onClick={()=>context.menuToggle(context.setisDropDownMenuOpen)}>
                <NavLink
                    to="/orders"
                >
                    Mis Pedidos
                </NavLink>
            </li>
            <li className="font-light" onClick={()=>context.menuToggle(context.setisDropDownMenuOpen)}>
                <NavLink
                    to= {`${context.user && !context.userVisible || !context.user && !context.userVisible ? "/login" : "/account"}`}
                >
                    {`${context.user && !context.userVisible || !context.user && !context.userVisible ? "Inicia sesion" : "Mi cuenta"}`}
                </NavLink>
            </li>
        </ul>
</div>
    )
}

export {DropDownManuNav}