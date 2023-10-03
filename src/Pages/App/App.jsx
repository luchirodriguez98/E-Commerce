import { useRoutes, BrowserRouter } from 'react-router-dom'

import { ShoppingCartProvider } from '../../Context/Context';
import { Nav } from '../../Components/Nav/Nav'
import { Home } from '../Home/Home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrder } from '../MyOrder/MyOrder';
import { MyOrders } from '../MyOrders/MyOrders';
import { NotFound } from '../NotFound/NotFound';
import { SignIn } from '../SignIn/SignIn';
import { CheckOutMenu } from '../../Components/CheckOutMenu/CheckOutMenu';

import './App.css';

const AppRoutes = () =>{
  let routes = useRoutes([
    {
      path: '/',
      element: <Home />
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
      path: '/login',
      element: <SignIn />
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
          <AppRoutes />
        </BrowserRouter>
      </ShoppingCartProvider>
  )
}

export default App