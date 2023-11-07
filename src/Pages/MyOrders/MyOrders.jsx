import { useContext } from "react";
import { Link } from 'react-router-dom';
import { Layout } from "../../Components/Layout/Layout"
import { OrdersCard } from "../../Components/OrdersCard/OrdersCard"
import { ContextShoppingCart } from "../../Context/Context";


function MyOrders() {

  const context = useContext(ContextShoppingCart);

    return (
      <Layout>
      <h2 className="text-2xl font-semibold text-black my-6">Pedidos anteriores</h2>
      <div className="flex flex-col items-center justify-between w-full">
          {
            context.order.map((order, index) =>(
              <Link key={index} to={`/orders/${index}`}>
                <OrdersCard order={order} />
              </Link>
                ))
            } 
        </div>
    </Layout>
    )
  }
  
  export {MyOrders}