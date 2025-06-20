import { useContext, useState } from "react"
import {ShopContext} from '../Context/ShopContext'
import { assets } from "../frontend_assets/assets";
import Title from '../Components/Title'

const Collection = () => {
   const { products } = useContext(ShopContext);
   const [showFilter , setShowFilter] = useState(false);
   const Array = ['ALL','COLLECTIONS']

  return (
    <>
     <div className="flex flex-col gap-1 pt-10 border-t sm:flex-row sm:gap-10">
    
      {/* Filter Options */}
       <div className="min-w-60">
        <p className="flex items-center gap-2 my-2 text-xl cursor-pointer" onClick={() =>{setShowFilter(!showFilter)}}>
          FILTERS
          <img className={`h-4 sm:hidden ${showFilter ? 'rotate-90' : ' '}`} src={assets.dropdown_icon} alt="DropDown icon" />
        </p>
      {/* Category Filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilter ? ' ' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Men'}/> Men
            </p>
               <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Women'}/> Women
            </p>
               <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Kids'}/> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-5 ${showFilter ? ' ' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Topwear'}/> Topwear
            </p>
               <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Bottomwear'}/> Bottomwear
            </p>
               <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Winterwear'}/> Winterwear
            </p>
          </div>
        </div>
       </div>
       {/* Right Side */}
       <div className="flex-1">
        <div className="flex justify-between mb-4 text-base sm:text-2xl">
           <Title Text={Array}/>
        </div>
       </div>
     </div>
    </>
  )
}

export default Collection