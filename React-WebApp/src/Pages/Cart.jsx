import { useContext , useEffect , useState } from "react"
import {ShopContext} from '../Context/ShopContext'
import Titile from '../Components/Title'
import ProductItem from "../Components/ProductItem"
import { assets } from "../frontend_assets/assets"

const Cart = () => {
  const { products , currency , cartItems , upDateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
    
  useEffect(() =>{
    const tempData = [];
     for(const items in cartItems){
       for(const item in cartItems[items]){
        if(cartItems[items][item] > 0){
           tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
           })
         }
       }
     }
   setCartData(tempData);
  },[cartItems])
  const Array = ['YOUR','CART']
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Titile Text={Array}/>
      </div>
      <div >
         {
          cartData.map((item,i) =>{
            const productData = products.find((product) =>product._id === item._id);
          return (
            <div key={i} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
             <div  className="flex items-start gap-6">
               <img className="w-16 sm:w-20" src={productData.image[0]} alt="productData-Image" />
               <div>
                <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                <div className="flex items-center gap-5 mt-2">
                 <p>{currency} {productData.price}</p>
                 <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                </div>
               </div>
             </div>
             <input  className="border max-w-10 sm:max-w-20 px-1 sm:px-1 py-1" type="number" min={1} defaultValue={item.quantity}/>
             <img onClick={() =>upDateQuantity(item._id,item.size,0)} className="w-4 m-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="Bin-Icon" />
            </div>
           )
          })
         }
      </div>
    </div>
  )
}

export default Cart