import { useContext } from "react"
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/solid'
import { ContextShoppingCart } from "../../Context/Context"


function Card({item}) {
    const context = useContext(ContextShoppingCart);

    const saveInfo = (item)=>{
        context.closeCheckOutMenu() 
        context.openProductDetail() 
        context.setProductInfo(item)

    }
    const addProduct = (event, item) =>{
        event.stopPropagation();
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, item])
        context.openCheckOutMenu() 
        context.closeProductDetail() 
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(element => element.id === id).length > 0;

        if(!isInCart){
            return(
                <button onClick={(event) => addProduct(event, item)} className="absolute flex items-center justify-center w-6 h-6 p-1 bg-white rounded-full top-2 right-2">
                    <PlusIcon className="w-6 h-6 text-red-500"/>
                </button>
            )
        }else if (isInCart){
            return(
                <button className="absolute flex items-center justify-center w-6 h-6 p-1 bg-white rounded-full top-2 right-2">
                    <CheckIcon className="w-6 h-6 text-green-500"/>
                </button>
            )
        }
    }

    return (
            <div className="w-56 rounded-lg cursor-pointer h-60" onClick={() => saveInfo(item)}>
                <figure className="relative w-full rounded-lg h-4/5">
                    <img className="object-cover w-full h-full rounded-lg" src={item.image} alt={item.description}/>
                    {renderIcon(item.id)}
                </figure>
                <p className="flex items-center justify-between px-2 h-1/5">
                    <span className="text-sm font-light">{item.title}</span>
                    <span className="text-lg font-medium">${item.price}</span>
                </p>
            </div>
    )
  }
  
  export {Card}
  