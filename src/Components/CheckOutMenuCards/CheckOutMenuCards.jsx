import { useContext } from "react"
import { ContextShoppingCart } from "../../Context/Context"
import { XMarkIcon } from '@heroicons/react/24/solid'

const CheckOutMenuCards = ({item}) =>{

    const context = useContext(ContextShoppingCart);

    const deleteProduct = () =>{
        let indice = context.cartProducts.indexOf(item);
        context.cartProducts.splice(indice, 1);
        context.setCount(context.count - 1)
    }
    
    return(
        <div className="flex justify-between items-center w-full m-2">
            <div className="flex flex-row items-center gap-2">
                <figure className="w-16 h-16">
                    <img className="w-full h-full rounded-lg object-cover"src={item.image} alt="" />
                </figure>
                <p className="text-xs font-medium">{item.title}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-m font-medium">${item.price}</p>
                <button>
                    <XMarkIcon className="h-5 w-5 text-red-500 cursor-pointer" onClick={() => deleteProduct()}/>
                </button>
            </div>
        </div>
    )
}

export {CheckOutMenuCards}