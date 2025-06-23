import { createContext, useEffect, useState } from "react";
import {products} from '../frontend_assets/assets';

export const ShopContext = createContext();

 const ShopContextProvider = (props) => {
       
       const currency = '$';
       const delvery_fee = 10;
        const [search , setSearch] = useState();
        const [showSearch , setShowSearch] = useState(false);
        const [cartItems , setCartItems] = useState({});

        const addToCart = async (itemId , size) =>{
            let cartDatas = structuredClone(cartItems);

            if(cartDatas[itemId]){
              if(cartDatas[itemId][size]){
                cartDatas[itemId][size] += 1;
              }
              else{
                cartDatas[itemId][size] = 1;
              }
            }
            else{
                cartDatas[itemId] = {};
                cartDatas[itemId][size] = 1;
            }
            setCartItems(cartDatas);
        }

        useEffect(() =>{
          console.log(cartDatas);
        },[cartItems])
       
       const value ={
        products , currency , delvery_fee , 
        search , setSearch , showSearch , 
        setShowSearch , cartItems , addToCart
     }
     return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
     )
 }

export default ShopContextProvider;