import { useContext } from "react"
import { ContextShoppingCart } from "../../Context/Context"
import { TrashIcon } from '@heroicons/react/24/solid'

const CheckOutMenuCards = ({item}) =>{

    const context = useContext(ContextShoppingCart);

    const deleteProduct = () =>{
        let indice = context.cartProducts.indexOf(item);
        context.cartProducts.splice(indice, 1);
        context.setCount(context.count - 1)
    }
    
    return(
        <div className="flex items-center justify-between w-full gap-2 my-2 border-b-2 border-gray-100 h-28">
            <div className="flex flex-row items-center gap-2">
                <figure className="w-14 h-14">
                    <img className="object-cover mr-1 rounded-lg"src={item.image} alt="" />
                </figure>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-xs font-medium">{item.title}</p>
                <p className="font-medium text-m">{item.price}€</p>
            </div>
                <button>
                    <TrashIcon className="w-5 h-5 text-red-500 cursor-pointer" onClick={() => deleteProduct()}/>
                </button>
        </div>
    )
}

export {CheckOutMenuCards}