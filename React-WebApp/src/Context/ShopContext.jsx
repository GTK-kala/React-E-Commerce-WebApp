import { createContext } from "react";
import {products} from '../frontend_assets/assets';

export const ShopContext = createContext();

 const ShopContextProvider = (props) => {
       
       const currency = '$';
       const delvery_fee = 10;
       
       const value ={
        products , currency , delvery_fee
     }
     return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
     )
 }

export default ShopContextProvider;