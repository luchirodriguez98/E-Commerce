import { useContext, useEffect, useState } from "react";

import { Card } from "../../Components/Card/Card"
import { Layout } from "../../Components/Layout/Layout"
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";
import { ContextShoppingCart } from "../../Context/Context";
import './Home.css'



function Home() {
  
  const [items, setItems] = useState([])
  const {isPDOpen} = useContext(ContextShoppingCart);

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=32')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => error)
    },[]);

    console.log(items);
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-2 w-full max-w-screen-lg mt-10">
        {
          items?.map(item =>(
            <Card key={item.id} item={item}/>
          ))
        } 
        <div className={`${isPDOpen ? "block absolute top-0 right-0 left-0 bottom-0 h-screen background-transparent" : "hidden"}`}>
        </div>
      </div>
      <ProductDetail />
    </Layout>
  )
}

export {Home}
