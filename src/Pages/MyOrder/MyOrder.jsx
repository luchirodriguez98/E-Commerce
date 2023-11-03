import { useContext } from 'react';
import { Layout } from "../../Components/Layout/Layout"
import { ContextShoppingCart } from '../../Context/Context';
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'


function MyOrder() {

  const context = useContext(ContextShoppingCart);
  
  // leer la url
  const currentPath = window.location.pathname;
  let indexOrder = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if(indexOrder === 'last') {
    indexOrder = context.order?.length -1;
  }

    return (
      <Layout>
        <div className="relative flex items-center justify-center w-80">
          <Link to='/orders' className="absolute left-0">
            <ChevronLeftIcon className="w-6 h-6 text-red-500 cursor-pointer"/>
          </Link>
          <h1>My Order</h1>
        </div>
        <div className="flex flex-col items-center justify-between w-80">
          {
            context.order[indexOrder]?.product.map(item =>(
                <OrderCard item = {item} key={item.id}/>
                ))
            } 
        </div>
      </Layout>
    )
  }
  
  export {MyOrder}