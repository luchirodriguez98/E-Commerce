import { useContext } from 'react';
import { Layout } from "../../Components/Layout/Layout"
import { ContextShoppingCart } from '../../Context/Context';
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'


function MyOrder() {

  const context = useContext(ContextShoppingCart);
  
  // leer la url
  const currentPath = window.location.pathname;
  let indexOrder = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  
  if(indexOrder === 'last') {
    indexOrder = context.order?.length -1;
  }
  
  const buttonToRender = () =>{
    if(currentPath.substring(currentPath.lastIndexOf('/') + 1) === 'last') {
      return(<Link to="/">
        <button className="w-full h-10 p-1 mt-8 text-base bg-red-200 rounded-xl" onClick={() => context.setDirectionValue('')}>Pagar</button>
      </Link>)
    }else{
      return <button className="w-full h-10 p-1 mt-8 text-base border-2 border-red-200 cursor-auto rounded-xl">Ya ha sido abonado</button>
    }
  }
  

    return (
      <Layout>
        <div className='w-full px-10'>
          <Link to='/orders' className="relative flex flex-row w-full gap-5 mt-8">
            <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer"/>
            <p>Pedidos anteriores</p>
          </Link>
        </div>
        <div className='flex w-5/6 gap-5 mt-5 h-96'>
          <div className='w-4/6 h-full'>
            <div className='p-5 mb-3 border border-gray-300 rounded-md h-2/4'>
              <h2 className="mb-6 text-2xl font-semibold text-black">Entrega</h2>
              <div className='flex flex-col justify-between h-2/4'>
                <p>Fecha de pedido: {context.order[indexOrder]?.date}</p>
                <p>Direccion de entrega: {context.order[indexOrder]?.direction}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between w-full p-5 border border-gray-300 rounded-md h-2/4">
              <h2 className="mb-6 text-2xl font-semibold text-black">Articulos</h2>
              <div className="flex flex-col flex-1 px-3 overflow-x-hidden overflow-y-scroll ">
                {
                  context.order[indexOrder]?.product.map(item =>(
                    <OrderCard item = {item} key={item.id}/>
                  ))
                } 
              </div>
            </div>
          </div>
          <div className='w-1/4 h-full p-5 border border-gray-300 rounded-md'>
            <h2 className="text-2xl font-semibold text-black h-1/4">Resumen</h2>
            <div className='flex flex-col justify-between mb-8 h-2/5'>
              <p className=''>Numero de pedido: #{context.order[indexOrder]?.orderNumber}</p>
              <p className=''>Manera de pago: {context.order[indexOrder]?.pay}</p>
              <p className="text-base font-semibold text-black">Total: {context.order[indexOrder]?.totalPrice}€</p>
            </div>
            {buttonToRender()}
          </div>     
        </div>
      </Layout>
    )
  }
  
  export {MyOrder}