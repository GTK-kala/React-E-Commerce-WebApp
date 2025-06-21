import { useContext, useEffect, useState } from "react"
import {ShopContext} from '../Context/ShopContext'
import { assets } from "../frontend_assets/assets";
import Title from '../Components/Title'
import ProductItem from "../Components/ProductItem";

const Collection = () => {
   const { products } = useContext(ShopContext);
   const [showFilter , setShowFilter] = useState(false);
   const [filterProducts , setfilterProducts] = useState([]);
   const [category , setCategory] = useState([]);
   const [subCategory , setSubCategory] = useState([]);
   const [sortType , setSortType] = useState('relevent');

  const toggleCategory = (e) => {
      if(category.includes(e.target.value)){
        setCategory(prev => prev.filter(item => item !== e.target.value));
      }
      else{
        setCategory(prev => [...prev,e.target.value])
      }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.vlaue)){
       setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory(prev => [...prev,e.target.value]);
    }
  }

  const applyFilter = () =>{
      let ProductsCopy = products.slice();
      if(category.length > 0){
          ProductsCopy = ProductsCopy.filter(item => category.includes(item.category));
      }
      if (subCategory.length > 0){
        ProductsCopy = ProductsCopy.filter(item => subCategory.includes(item.subCategory));
      }
      setfilterProducts(ProductsCopy);
    }
   
  const sortProducts = () =>{
     let ftCopy = filterProducts.slice();
     switch(sortType){
       case 'low-high':
        setfilterProducts(ftCopy.sort((a,b) =>(a.price - b.price)));
        break;
      case 'high-low':
        setfilterProducts(ftCopy.sort((a,b) =>(b.price - a.price)))
        break;
      default:
        applyFilter();
        break;
     };
  };
     
   useEffect(() =>{
     applyFilter();
   },[category,subCategory]);

   useEffect(() =>{
    sortProducts();
   },[sortType]);

   const Array = ['ALL','COLLECTIONS'];
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
              <input className="w-3 cursor-pointer" type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
            </p>
               <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
            </p>
               <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Kids'} onChange={toggleCategory}/> Kids
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-400 pl-5 py-3 mt-5 ${showFilter ? ' ' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/> Topwear
            </p>
               <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
               <p className="flex gap-2">
              <input className="w-3 cursor-pointer" type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
       </div>
       {/* Right Side */}
       <div className="flex-1">
        <div className="flex justify-between mb-4 text-base sm:text-2xl">
           <Title Text={Array}/>
       {/* Product Sort */}
          <select onChange={(e) =>{setSortType(e.target.value)}} className="px-1 text-sm border-2 border-l-2 border-gray-300 cursor-pointer">
            <option value="relevent">Sort by: Relevent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
       {/* Map Products */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
          {
            filterProducts.map((item,i) =>{
              return <ProductItem key={i} id={item._id} image={item.image} name={item.name} price={item.price} />
            })
          }
        </div>
       </div>
     </div>
    </>
  )
}

export default Collection