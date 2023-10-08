import { useContext } from 'react';
import { Layout } from "../../Components/Layout/Layout"
import { ContextShoppingCart } from '../../Context/Context';
import { CheckOutMenuCards } from '../../Components/CheckOutMenuCards/CheckOutMenuCards';


function MyOrder() {

  const context = useContext(ContextShoppingCart);
  console.log(context.order[context.order.length -1].product);

    return (
      <Layout>
        My Order
        <div className="flex flex-col justify-between items-center w-80">
          {
            context.order[context.order.length -1].product.map(item =>(
                <CheckOutMenuCards item = {item} key={item.id}/>
                ))
            } 
        </div>
      </Layout>
    )
  }
  
  export {MyOrder}