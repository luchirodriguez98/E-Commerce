import { Link, useNavigate } from "react-router-dom"
import { Layout } from "../../Components/Layout/Layout"
import { useEffect } from "react";

function NotFound() {

  const navigate = useNavigate();

  useEffect(() => {
    
    const idTime = setTimeout(() => navigate('/'), 5000);

    return () => {
      clearTimeout(idTime);
    }
  }, []);

  return (
    <Layout>
      <section className="flex flex-col items-center justify-center w-full ">
      <h1 className="my-5 text-2xl font-semibold">Pagina no encontrada</h1>
      <p>Serás redirigido a la home.</p>
      </section>
    </Layout>
  )}
  
  export {NotFound}