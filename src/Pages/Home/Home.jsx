import { useEffect, useState } from "react";
import axios from 'axios';

import { Card } from "../../Components/Card/Card"
import { Layout } from "../../Components/Layout/Layout"



function Home() {
  
  const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=30')
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
      </div>
    </Layout>
  )
}

export {Home}
