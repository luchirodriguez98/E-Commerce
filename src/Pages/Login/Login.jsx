import { useContext } from "react"
import { Layout } from "../../Components/Layout/Layout"
import { ContextShoppingCart } from "../../Context/Context"
import { Link } from "react-router-dom";

function Login() {

  const context = useContext(ContextShoppingCart);

  const handleNameChange = (event) =>{
    context.setUser(event.target.value)
  }

    return (
      <Layout>
        <section className="flex items-center justify-center w-full h-full">
          <form className="flex flex-col items-center justify-center w-5/6 h-2/4" onSubmit={(event)=>event.preventDefault()}>
            <h1 className="my-5 text-2xl font-semibold">¡Bienvenido!</h1>
            <label htmlFor="name">Usuario</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                className='w-2/4 h-10 p-1 mb-3 border border-gray-300 rounded-md' 
                value={context.user} 
                onChange={(event)=>handleNameChange(event)}
              />
            <label htmlFor="pass">Contraseña</label>
              <input type="password" name="pass" id="pass" className='w-2/4 h-10 p-1 mb-3 border border-gray-300 rounded-md'/>
            <Link to="/">
              <button className="w-40 h-10 p-1 mt-5 text-base bg-red-200 rounded-2xl" onClick={context.toggleVisibilityUser}>Inciar sesion</button>
            </Link>
          </form>
        </section>
      </Layout>
    )
  }
  
  export {Login}