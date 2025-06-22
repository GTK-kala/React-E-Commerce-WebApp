import { useContext , useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../frontend_assets/assets'

const Product = () => {
  const {productId} = useParams()
  const {products , currency , } = useContext(ShopContext);
  const [productData , setProductData] = useState(false);
  const [image , setImage] = useState(' ');
  const [size , setSize] = useState(' ');

  const fetchProductData = async () =>{
     products.map((item) =>{
      if(item._id === productId){
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
     })
  }
  useEffect(() =>{
    fetchProductData();
  },[productId, products])
  return productData ? (
    <div className='pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100'>
    {/*---------------------Product Data-----------------------*/}
      <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
    {/*---------------------Product Image----------------------*/}
       <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          { 
            productData.image.map((item,i) => (
              <img onClick={() => {setImage(item)}} src={item} key={i} className='w-[40%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="Item Image" />
            ))
          }
        </div>
        <div className='w-full sm:w-[80%]'>
          <img className='w-full h-auto' src={image} alt="product Image" />
        </div>
       </div>
    {/*---------------------Product Info----------------------*/}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
           <div className='flex items-center gap-1 mt-2'>
             <img src={assets.star_icon} alt="Star-Image" className="w-5" />
             <img src={assets.star_icon} alt="Star-Image" className="w-5" />
             <img src={assets.star_icon} alt="Star-Image" className="w-5" />
             <img src={assets.star_icon} alt="Star-Image" className="w-5" />
             <img src={assets.star_dull_icon} alt="Star-Image" className="w-5" />
             <p className="pl-2 font-bold">(122)</p>
           </div>
           <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
           <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
             {
              productData.sizes.map((item,i) =>(
                <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-400' : ' '}`} key={i}>{item}</button>
              ))
             }
            </div>
           </div>
           <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-500'> ADD TO CART</button>
           <hr className='mt-8 sm:w-4/5'/>
           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on deliver is availabel on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
           </div>
        </div>
      </div>
    {/*---------------------Description & Review Section----------------------*/}
     <div className='mt-20'>
      <div className='flex'>
        <p className='border px-5 py-3 text-sm'>Description</p>
        <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
      </div>
      <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam suscipit laudantium quis quibusdam deleniti nihil hic omnis consectetur libero velit ea quisquam expedita numquam vero, atque unde magnam et.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo veniam suscipit laudantium quis quibusdam deleniti nihil hic omnis consectetur libero velit ea quisquam expedita numquam vero, atque unde magnam et.</p>
      </div>
     </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product