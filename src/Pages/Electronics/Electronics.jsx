import { useContext } from "react";
import { Card } from "../../Components/Card/Card"
import { Layout } from "../../Components/Layout/Layout"
import { ProductDetail } from "../../Components/ProductDetail/ProductDetail";
import { ContextShoppingCart } from "../../Context/Context";
import { OrderDataModal } from "../../Components/OrderDataModal/OrderDataModal";



function Electronics() {
  
  const context = useContext(ContextShoppingCart);
  const filteredItems = context.items.filter((item)=> item.category.includes('electronics'));
  
  return (
    <Layout>
      <h1 className="w-full max-w-screen-lg mt-8 text-lg font-semibold text-center">Electronica</h1>
      <p className="w-full mb-3 text-xs font-light text-center text-gray-500 max-w-screen">Mira los recien llegados en tecnologia</p>
      <div className="grid w-5/6 max-w-screen-lg grid-cols-1 gap-2 mt-8 sm:grid-cols-2 lg:grid-cols-3 ">
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

export {Electronics}