// import { useContext } from "react"
// import { ContextShoppingCart } from "../../Context/Context"


const OrdersCard = ({totalProducts, totalPrice}) =>{

    // const context = useContext(ContextShoppingCart);
    
    return(
        <div className="flex items-center justify-between w-full m-2 border border-black">
            <p>
                <span>01.02.2023</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}

export {OrdersCard}