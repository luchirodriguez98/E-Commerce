import { useContext } from "react";

import { Card } from "../../Components/Card/Card"
import { Layout } from "../../Components/Layout/Layout"
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";
import { ContextShoppingCart } from "../../Context/Context";
import '../background-modal.css'
import { OrderDataModal } from "../../Components/OrderDataModal/OrderDataModal";



function Home() {
  
  const context = useContext(ContextShoppingCart);
  const filteredItems = context.items.filter((item)=> item.title.toLowerCase().includes(context.searchValue.toLowerCase()));
  
  return (
    <Layout className={`${context.isProductDetailOpen ? "overflow-y-hidden" : "none"}`}>
      <h1 className="w-full max-w-screen-lg mt-8 text-lg font-semibold">Productos destacados</h1>
      <p className="w-full max-w-screen-lg mb-3 text-xs font-light text-gray-500">Hechales un vistazo</p>
      <div className="grid w-full max-w-screen-lg grid-cols-4 gap-2 mt-8">
        {
          filteredItems?.map(item =>(
            <Card key={item.id} item={item}/>
          ))
        } 
      </div>
      <ProductDetail />
      <OrderDataModal />
    </Layout>
  )
}

export {Home}
