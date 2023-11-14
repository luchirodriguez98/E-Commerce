import { useRoutes, BrowserRouter } from 'react-router-dom'

import { ShoppingCartProvider } from '../../Context/Context';
import { Nav } from '../../Components/Nav/Nav'
import { Home } from '../Home/Home';
import { Clothes } from '../Clothes/Clothes';
import { Electronics } from '../Electronics/Electronics';
import { Jewelery } from '../Jewelery/Jewelery';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { Login } from '../Login/Login';
import { CheckOutMenu } from '../../Components/CheckOutMenu/CheckOutMenu';

import './App.css';

const AppRoutes = () =>{
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/clothes',
      element: <Clothes />
    },
    {
      path: '/electronics',
      element: <Electronics />
    },
    {
      path: '/jewelery',
      element: <Jewelery />
    },
    {
      path: '/account',
      element: <MyAccount />
    },
    {
      path: '/order',
      element: <MyOrder />
    },
    {
      path: '/orders',
      element: <MyOrders />
    },
    {
      path: '/orders/last',
      element: <MyOrder />
    },
    {
      path: '/orders/:id',
      element: <MyOrder />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/*',
      element: <NotFound />
    },
  ]);

  return routes;
}

function App() {

  return (
      <ShoppingCartProvider>
       <BrowserRouter>
          <Nav></Nav>
          <CheckOutMenu />
          <AppRoutes/>
        </BrowserRouter>
      </ShoppingCartProvider>
  )
}

export default App