import { useContext } from "react"
import { Layout } from "../../Components/Layout/Layout"
import { ContextShoppingCart } from "../../Context/Context"
import { Link } from "react-router-dom";

function MyAccount() {

  const context = useContext(ContextShoppingCart);

    return (
      <Layout>
        <section className="flex items-center justify-center w-full h-full">
          <form className="flex flex-col items-center justify-center w-5/6 h-2/4" onSubmit={(event)=>event.preventDefault()}>
            <h1 className="my-5 text-2xl font-semibold">Hola {context.user}!</h1>
            <Link to="/orders">
              <button className="h-10 p-1 mt-5 text-base bg-red-200 w-52 rounded-2xl">Mis pedidos</button>
            </Link>
            <Link to="/login">
              <button className="h-10 p-1 mt-5 text-base bg-white border border-gray-300 w-52 rounded-2xl" onClick={()=> context.logout()}>Cerrar sesion</button>
            </Link>
          </form>
        </section>
      </Layout>
    )
  }
  
  export {MyAccount}