import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'
import { ContextShoppingCart } from "../../Context/Context"


function Card({item}) {
    const context = useContext(ContextShoppingCart);

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(element => element.id === id).length > 0;

        if(!isInCart){
            return(
                <button className="h-8 border border-pink-300 rounded-xl w-52" onClick={(event) => context.addProduct(event, item)}>Añadir al carrito</button>
            )
        }else if (isInCart){
            return(
                <button className="h-8 bg-pink-300 border border-pink-300 rounded-xl w-52">Producto añadido!</button>
            )
        }
    }
    function titleLarge (title){

        if(title.length > 50){
            return title.substring(0, 50) + '...';
        } else {
            return title
        }
    }

    return (
            <div className="p-4 border border-gray-200 rounded-lg cursor-pointer h-74 w-58" onClick={() => context.saveInfo(item)}>
                <figure className="relative w-full mb-3 rounded-lg">
                    <img className="object-cover w-56 h-56 rounded-lg" src={item.image} alt={item.description}/>
                    
                </figure>
                    <div className="font-light h-11">{titleLarge(item.title)}</div>
                    <div className="relative bottom-0 my-4 text-lg font-bold">${item.price}€</div>
                   {renderIcon(item.id)}
            </div>
    )
  }
  
  export {Card}
  