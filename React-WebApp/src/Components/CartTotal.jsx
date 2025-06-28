import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import Title from "./Title";

const CartTotal = () => {
   const {currency , delvery_fee , getCartAmount} = useContext(ShopContext);
  
   const Array = ['CART','TOTALS'];
   return (
    <div className="w-full">
      <div className="text-2xl">
       <Title Text={Array}/>
      </div>
      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{currency} {getCartAmount()}.00</p>
        </div>
        <hr className=""/>
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{currency} {delvery_fee}.00</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delvery_fee}.00 </b>
        </div>
      </div>
    </div>
  )
}

export default CartTotal