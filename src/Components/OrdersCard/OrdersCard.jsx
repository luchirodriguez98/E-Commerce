// import { useContext } from "react"
// import { ContextShoppingCart } from "../../Context/Context"
import { PlusIcon } from '@heroicons/react/24/solid'


const OrdersCard = ({order}) =>{

    // const context = useContext(ContextShoppingCart);
    
    return(
        <div className="flex items-center justify-between w-80 h-16 p-2 m-2 border border-gray-400 rounded-md">
                <span className='font-bold'>#{order.orderNumber}</span>
                <span>{order.totalProducts} unid.</span>
                <span>{order.totalPrice}€</span>
                <PlusIcon className='w-6'/>
        </div>
    )
}

export {OrdersCard}