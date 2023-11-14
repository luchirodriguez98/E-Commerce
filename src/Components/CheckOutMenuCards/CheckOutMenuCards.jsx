/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ContextShoppingCart } from "../../Context/Context"
import { TrashIcon } from '@heroicons/react/24/solid'

const CheckOutMenuCards = ({item}) =>{

    const context = useContext(ContextShoppingCart);

    return(
        <div className="flex items-center w-full gap-2 pb-3 my-2 border-b-2 border-gray-100 h-28">
            <div className="flex flex-row items-center w-2/4 gap-2">
                <figure className="w-14">
                    <img className="mr-1"src={item.image} alt="" />
                </figure>
            </div>
            <div className="flex flex-col w-full gap-2">
                <p className="text-xs font-medium">{context.titleLarge(item.title)}</p>
                <p className="font-medium text-m">{item.price}€</p>
            </div>
            <button>
                <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer" onClick={() => context.deleteProduct(item)}/>
            </button>
        </div>
    )
}

export {CheckOutMenuCards}