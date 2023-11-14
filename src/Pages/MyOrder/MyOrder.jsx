import { useContext } from 'react';
import { Layout } from "../../Components/Layout/Layout"
import { ContextShoppingCart } from '../../Context/Context';
import { OrderCard } from '../../Components/OrderCard/OrderCard';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import './MyOrden.css'


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
        <button className="w-full h-10 p-1 text-base bg-red-200 rounded-xl" onClick={() => context.setDirectionValue('')}>Pagar</button>
      </Link>)
    }else{
      return <button className="w-full h-10 p-1 text-base border-2 border-red-200 cursor-auto rounded-xl">Ya ha sido abonado</button>
    }
  }
  

    return (
      <Layout>
        <div className='w-full px-2 md:px-10'>
          <Link to='/orders' className="relative flex flex-row w-full gap-2 mt-8">
            <ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer"/>
            <p>Pedidos anteriores</p>
          </Link>
        </div>
        <div className='grid w-11/12 grid-cols-1 my-5 h-2/4 md:gap-5 md:grid-cols-2'>
          <div className='h-full mb-3'>
            <div className='p-5 mb-3 border border-gray-300 rounded-md'>
              <h2 className="mb-3 text-2xl font-semibold text-black ">Entrega</h2>
              <ul className='flex flex-col justify-between pl-3 h-2/4'>
                <li className='mb-1 list-disc'>Fecha de pedido: {context.order[indexOrder]?.date}</li>
                <li className='list-disc'>Direccion de entrega:</li>
                <p>{context.order[indexOrder]?.direction}</p>
              </ul>
            </div>
            <div className='p-5 border border-gray-300 rounded-md'>
            <h2 className="mb-3 text-2xl font-bold text-black h-1/4">Resumen</h2>
            <ul className='flex flex-col justify-between pl-3 mb-8 h-2/5'>
              <li className='mb-1 list-disc'>Numero de pedido: #{context.order[indexOrder]?.orderNumber}</li>
              <li className='mb-1 list-disc'>Manera de pago: {context.order[indexOrder]?.pay}</li>
              <p className="text-base font-medium text-black">Total: {context.order[indexOrder]?.totalPrice}€</p>
            </ul>
            {buttonToRender()}
          </div>
          </div>
          <div className="flex flex-col justify-between w-full p-5 border border-gray-300 rounded-md section-articles">
              <h2 className="mb-6 text-2xl font-semibold text-black">Articulos</h2>
              <div className="flex flex-col flex-1 overflow-x-hidden overflow-y-scroll ">
                {
                  context.order[indexOrder]?.product.map(item =>(
                    <OrderCard item = {item} key={item.id}/>
                  ))
                } 
              </div>
            </div>
               
        </div>
      </Layout>
    )
  }
  
  export {MyOrder}