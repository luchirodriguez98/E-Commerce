import { NavLink } from "react-router-dom";
import { ContextShoppingCart } from "../../Context/Context";
import { useContext } from "react";

const Nav = () =>{

    const activeStyle = { textDecoration: "underline" };

    const context = useContext(ContextShoppingCart);

    return(
        <nav className="bg-orange-100 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-5 text-sm font-light">
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
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furniture"
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Others
                    </NavLink>
                </li>
            </ul>
            {/* parte izquierda */}
            <ul className="flex justify-between items-center gap-x-2">
                <li className="text-gray-300">
                    luchirodriguez98@gmail.com
                </li>
                <li>
                    <NavLink
                        to="/orders"
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/account"
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        style={({ isActive }) => isActive ? activeStyle : undefined }
                    >
                        Sign Out
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        🛒{context.count}
                    </NavLink>
                </li>
                
            </ul>
        </nav>
        
    )
}

export { Nav }