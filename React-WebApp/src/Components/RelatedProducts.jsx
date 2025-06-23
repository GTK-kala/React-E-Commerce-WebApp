import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext";
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProducts = ({category , subCategory}) => {
    
    const { products } = useContext(ShopContext);
    const [related , setRelated] = useState([]);


    useEffect(() =>{

         if(products.length > 0){
            let ProductCopy = products.slice();
            ProductCopy = ProductCopy.filter((item) =>category === item.category);
            ProductCopy = ProductCopy.filter((item) =>subCategory === item.subCategory);
            setRelated(ProductCopy.slice(0,5));
         }
    },[products])
    let Array = ['RELATED' , 'PRODUCTS']
  return (
    <div className="my-24">
        <div className="py-2 text-center text-3x">
         <Title Text={Array}/>        
        </div> 
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6">
         {related.map((item ,i) =>{
           return <ProductItem key={i} id={item._id} image={item.image} name={item.name} price={item.price} />
         })}
        </div>
    </div>
  )
}

export default RelatedProducts