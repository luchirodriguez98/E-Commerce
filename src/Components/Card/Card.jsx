/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ContextShoppingCart } from "../../Context/Context"



function Card({item}) {
    
    const context = useContext(ContextShoppingCart);

    return (
            <div className="flex flex-col items-center h-auto p-4 border border-gray-200 rounded-lg cursor-pointer w-58" onClick={() => context.saveInfo(item)}>
                <figure className="flex items-center justify-center w-5/6 mb-3 text-center rounded-lg h-60 ">
                    <img className="flex items-center object-cover object-top w-56 rounded-lg h-60" src={item.image} alt={item.description}/>  
                </figure>
                    <div className="font-light h-11">{context.titleLarge(item.title)}</div>
                    <div className="relative bottom-0 my-4 text-lg font-bold">{item.price}€</div>
                   {context.renderIcon(item)}
            </div>
    )
  }
  
  export {Card}
  