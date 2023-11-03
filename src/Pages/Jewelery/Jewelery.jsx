import { useContext } from "react";
import { Card } from "../../Components/Card/Card"
import { Layout } from "../../Components/Layout/Layout"
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";
import { ContextShoppingCart } from "../../Context/Context";



function Jewelery() {
  
  const context = useContext(ContextShoppingCart);
  const filteredItems = context.items.filter((item)=> item.category.includes('jewelery'));
  
  return (
    <Layout>
       <div className="relative flex items-center justify-center mt-4 w-80">
          <h1>Jewelery</h1>
        </div>
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-2 mt-10">
        {
          filteredItems?.map(item =>(
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

export {Jewelery}