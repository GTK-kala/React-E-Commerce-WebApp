import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
     
     const {products} = useContext(ShopContext);
        
     const[latestProducts, setLatestProducts] = useState([]);

     useEffect(() =>{
         setLatestProducts(products.slice(0, 20));
     },[])

     let Array= ['LATEST', 'COLLECTION'];
  return (
    <div className="my-10">
        <div className="py-8 text-3xl text-center">
            <Title Text={Array}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum magni, fugit, neque quo tenetur a sint maiores ex repellendus repudiandae repellat commodi eius aliquid debitis quaerat quod reprehenderit iure? Doloremque!
            </p>
        </div>
      {/* Rendering Latest Products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6">
              {
                latestProducts.map((item,i) =>{
                   return <ProductItem key={i} id={item._id} image={item.image} name={item.name} price={item.price} />
                })
              }
          </div>
    </div>
  )
}

export default LatestCollection