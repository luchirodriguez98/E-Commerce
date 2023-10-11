import { useContext } from "react"
import { ContextShoppingCart } from "../../Context/Context"

const OrdersCard = ({item}) =>{

    const context = useContext(ContextShoppingCart);

    const deleteProduct = () =>{
        let indice = context.cartProducts.indexOf(item);
        context.cartProducts.splice(indice, 1);
        context.setCount(context.count - 1)
    }
    
    return(
        <div className="flex items-center justify-between w-full m-2 border border-black">
            <p>
                <span>01.02.2023</span>
                <span>{item.totalProducts}</span>
                <span>{item.totalPrice}</span>
            </p>
        </div>
    )
}

export {OrdersCard}