import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'
import { ContextShoppingCart } from "../../Context/Context"


function Card({item}) {
    
    const context = useContext(ContextShoppingCart);

    return (
            <div className="p-4 border border-gray-200 rounded-lg cursor-pointer h-74 w-58" onClick={() => context.saveInfo(item)}>
                <figure className="relative w-full mb-3 rounded-lg">
                    <img className="object-cover w-56 h-56 rounded-lg" src={item.image} alt={item.description}/>
                    
                </figure>
                    <div className="font-light h-11">{context.titleLarge(item.title)}</div>
                    <div className="relative bottom-0 my-4 text-lg font-bold">{item.price}€</div>
                   {context.renderIcon(item)}
            </div>
    )
  }
  
  export {Card}
  