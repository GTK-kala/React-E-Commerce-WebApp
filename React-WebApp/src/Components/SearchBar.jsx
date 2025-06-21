import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../Context/ShopContext"
import { assets } from "../frontend_assets/assets";
import {useLocation} from 'react-router-dom'

const SearchBar = () => {
    const {search , setSearch , showSearch , setShowSearch} = useContext(ShopContext);
    const [visible , setVisible] = useState(false);
    const location = useLocation();

    useEffect(() =>{
       if(location.pathname.includes('collection')){
        setVisible(true);
       }
       else{
        setVisible(false);
       }
    }, [location])

  return showSearch && visible ? (
    <div className="text-center border-t border-b bg-gray-50">
     <div className="inline-flex justify-center w-3/4 px-5 py-2 mx-3 my-5 border border-gray-400 rounded-full item-center sm:w-1/2">
       <input className="flex-1 text-sm outline-none cursor-pointer bg-inherit" type="text" value={search} onChange={(e) =>setSearch(e.target.value)} placeholder ="Search"/>
        <img className="w-5 cursor-pointer" src={assets.search_icon} alt="Search-Icon" />
     </div>
     <img className="inline w-4 cursor-pointer" src={assets.cross_icon} alt="Cross=Icon" onClick={() =>{setShowSearch(false)}}/>
    </div>
  ) : null
}

export default SearchBar