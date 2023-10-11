import { useContext } from 'react';
import { Layout } from "../../Components/Layout/Layout"
import { ContextShoppingCart } from '../../Context/Context';
import { OrderCard } from '../../Components/OrderCard/OrderCard';



function MyOrder() {

  const context = useContext(ContextShoppingCart);
  console.log(context.order[context.order.length -1].product);

    return (
      <Layout>
        My Order
        <div className="flex flex-col items-center justify-between w-80">
          {
            context.order[context.order.length -1].product.map(item =>(
                <OrderCard item = {item} key={item.id}/>
                ))
            } 
        </div>
      </Layout>
    )
  }
  
  export {MyOrder}