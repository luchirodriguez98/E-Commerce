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
                <button onClick={(event) => addProduct(event, item)} className="absolute flex justify-center items-center top-2 right-2 w-6 h-6 p-1 bg-white  rounded-full">
                    <PlusIcon className="h-6 w-6 text-red-500"/>
                </button>
            )
        }else if (isInCart){
            return(
                <button className="absolute flex justify-center items-center top-2 right-2 w-6 h-6 p-1 bg-white  rounded-full">
                    <CheckIcon className="h-6 w-6 text-green-500"/>
                </button>
            )
        }
    }

    return (
            <div className="cursor-pointer w-56 h-60 rounded-lg" onClick={() => saveInfo(item)}>
                <figure className="relative w-full h-4/5 rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg" src={item.image} alt={item.description}/>
                    {renderIcon(item.id)}
                </figure>
                <p className="flex justify-between items-center  h-1/5 px-2">
                    <span className="text-sm font-light">{item.title}</span>
                    <span className="text-lg font-medium">${item.price}</span>
                </p>
            </div>
    )
  }
  
  export {Card}
  