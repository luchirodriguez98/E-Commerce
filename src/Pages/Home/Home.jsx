import { useContext, useEffect, useState } from "react";

import { Card } from "../../Components/Card/Card"
import { Layout } from "../../Components/Layout/Layout"
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";
import { ContextShoppingCart } from "../../Context/Context";
import './Home.css'



function Home() {
  
  const context = useContext(ContextShoppingCart);
  
  return (
    <Layout>
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-2 mt-10">
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
