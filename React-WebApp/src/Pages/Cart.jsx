import { useContext , useEffect , useState } from "react"
import {ShopContext} from '../Context/ShopContext'
import Titile from '../Components/Title'
import { assets } from "../frontend_assets/assets"
import CartTotal from "../Components/CartTotal"

const Cart = () => {
  const { products , currency , cartItems , upDateQuantity , navigate} = useContext(ShopContext);
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
  },[cartItems]);
  
  const Array = ['YOUR','CART']
  return (
    <div className="border-t pt-14">
      <div className="mb-3 text-2xl">
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
                <p className="text-xs font-medium sm:text-lg">{productData.name}</p>
                <div className="flex items-center gap-5 mt-2">
                 <p>{currency} {productData.price}</p>
                 <p className="px-2 border sm:px-3 sm:py-1 bg-slate-50">{item.size}</p>
                </div>
               </div>
             </div>
             <input onChange={(e) =>{e.target.value === '' || e.target.value === '0' ? null : upDateQuantity(item._id,item.size,Number(e.target.value))}}  className="px-1 py-1 border max-w-10 sm:max-w-20 sm:px-1" type="number" min={1} defaultValue={item.quantity}/>
             <img onClick={() =>upDateQuantity(item._id,item.size,0)} className="w-4 m-4 cursor-pointer sm:w-5" src={assets.bin_icon} alt="Bin-Icon" />
            </div>
           )
          })
         }
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
        <CartTotal />
         <div className="w-full text-end">
           <button onClick={() => navigate('/place-order')} className="bg-blue-500 text-white text-sm my-8 px-3 py-3 rounded-lg border-none">PROCEED TO CHECKOUT</button>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Cart