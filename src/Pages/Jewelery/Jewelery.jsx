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
      <h1 className="w-full max-w-screen-lg mt-8 text-lg font-semibold">Joyeria</h1>
      <p className="w-full max-w-screen-lg mb-3 text-xs font-light text-gray-500">Las ultimas tendencias en joyeria</p>
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-2 mt-8">
        {
          filteredItems?.map(item =>(
            <Card key={item.id} item={item}/>
          ))
        } 
        <div className={`${context.isProductDetailOpen ? "block fixed top-0 right-0 left-0 bottom-0 h-screen background-transparent z-10" : "hidden"}`}>
        </div>
      </div>
      <ProductDetail />
    </Layout>
  )
}

export {Jewelery}