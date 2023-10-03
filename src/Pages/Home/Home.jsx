import { useContext, useEffect, useState } from "react";

import { Card } from "../../Components/Card/Card"
import { Layout } from "../../Components/Layout/Layout"
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";
import { ContextShoppingCart } from "../../Context/Context";
import './Home.css'



function Home() {
  
  const context = useContext(ContextShoppingCart);
  
  // useEffect(()=>{
    //     fetch('https://fakestoreapi.com/products?limit=30')
    //     .then(response => response.json())
    //     .then(data => setItems(data))
    //     .catch(error => error)
    // },[]);
    // const [items, setItems] = useState([])
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-2 w-full max-w-screen-lg mt-10">
        {
          context.items?.map(item =>(
            <Card key={item.id} item={item}/>
          ))
        } 
        <div className={`${context.isProductDetailOpen ? "block absolute top-0 right-0 left-0 bottom-0 h-screen background-transparent" : "hidden"}`}>
        </div>
      </div>
      <ProductDetail />
    </Layout>
  )
}

export {Home}
