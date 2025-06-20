import { createContext, useState } from "react";
import {products} from '../frontend_assets/assets';

export const ShopContext = createContext();

 const ShopContextProvider = (props) => {
       
       const currency = '$';
       const delvery_fee = 10;
        const [search , setSearch] = useState();
        const [showSearch , setShowSearch] = useState(false)
       
       const value ={
        products , currency , delvery_fee , search , setSearch , showSearch , setShowSearch
     }
     return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
     )
 }

export default ShopContextProvider;