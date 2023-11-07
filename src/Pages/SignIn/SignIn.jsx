import { Layout } from "../../Components/Layout/Layout"

function SignIn() {

    return (
      <Layout>
        <section className="flex items-center justify-center w-full h-full">
          <form className="flex flex-col ">
            <h1>Bienvenido!</h1>
            <input type="text" className='w-2/4 h-10 p-1 border border-gray-300 rounded-md' />
            <input type="text" className='w-2/4 h-10 p-1 border border-gray-300 rounded-md'/>
            <button className="w-40 h-10 p-1 mt-5 text-base bg-red-200 rounded-2xl">Inciar sesion</button>
          </form>
        </section>
      </Layout>
    )
  }
  
  export {SignIn}