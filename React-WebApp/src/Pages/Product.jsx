import { useContext , useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
  const {productId} = useParams()
  const {products} = useContext(ShopContext);
  const [productData , setProductData] = useState(false);
  const [image , setImage] = useState(' ');
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
    {/* Product Data */}
      <div className='flex flex-col gap-12 sm:gap-12 sm:flex-row'>
    {/* Product Image */}
       <div className='flex flex-col-reverse flex-1 gap-3 sm:flex-row'>
        <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          { 
            productData.image.map((item,i) => (
              <img onClick={() => {setImage(item)}} src={item} key={i} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="Item Image" />
            ))
          }
        </div>
        <div className='w-full sm:w-[18%]'>
          <img className='w-full h-max' src={image} alt="product Image" />
        </div>
       </div>
      </div>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product