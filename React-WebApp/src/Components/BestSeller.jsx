import { useContext , useState , useEffect} from "react"
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {

    const {products} = useContext(ShopContext);

    const [bestSeller, setBestSeller] = useState([]);

        useEffect(() =>{
           const Filterd = products.filter((item) =>{
               if(item.bestseller === true){
                   return item;
               }
           });
           setBestSeller(Filterd);
        },[])
    const array =  ['BEST' , 'SELLERS']
  return (
    <div className="my-10">
        <div className="text-center text-3xl py-8">
            <Title Text={array}/>
            <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ab illum laudantium? Itaque repellendus amet voluptatum, optio veritatis, praesentium ducimus in sint iure aut repudiandae! Corporis a soluta itaque consequatur.</p>
        </div>
    {/*---------------------Rendering Best Products----------------------*/}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 grid-y-6">
            {
              bestSeller.map((item,i) =>{
                return <ProductItem key={i} id={item._id} image={item.image} name={item.name} price={item.price} />
             })
            }
        </div>
    </div>
  )
}

export default BestSeller