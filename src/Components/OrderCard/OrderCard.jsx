/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ContextShoppingCart } from "../../Context/Context"

const OrderCard = ({item}) =>{

    const context = useContext(ContextShoppingCart);

    
    return(
        <div className="flex items-center justify-between w-full m-2">
            <div className="flex flex-row items-center w-full gap-2">
                <figure className="w-16 h-16">
                    <img className="object-cover w-full h-full rounded-lg"src={item.image} alt="" />
                </figure>
                <p className="text-xs font-medium">{context.titleLarge(item.title)}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="font-medium text-m">${item.price}</p>
            </div>
        </div>
    )
}

export {OrderCard}