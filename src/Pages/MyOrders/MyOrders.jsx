import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Layout } from "../../Components/Layout/Layout"
import { OrdersCard } from "../../Components/OrdersCard/OrdersCard"
import { ContextShoppingCart } from "../../Context/Context";


function MyOrders() {

  const context = useContext(ContextShoppingCart);
    return (
      <Layout>
      My Orders
      <div className="flex flex-col items-center justify-between w-80">
          {
            context.order.map((order, index) =>(
              <Link key={index} to={`/orders/${index}`}>
                <OrdersCard totalProducts={order.totalProducts} totalPrice={order.totalPrice}/>
              </Link>
                ))
            } 
        </div>
    </Layout>
    )
  }
  
  export {MyOrders}