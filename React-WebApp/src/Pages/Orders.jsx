import Title from "../Components/Title";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from 'react';


const Orders = () => {
  
  const {currency , products} = useContext(ShopContext);
  let date = new Date();
  date = date.toLocaleDateString();
  const Array = ['MY','ORDERS'];
  return (
    <div className="border-t pt-16">

     <div className="text-2xl">
      <Title Text={Array} />
     </div>

     <div>
      {
        products.slice(1,4).map((item,i) =>{
          return <div key={i} className="py-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-20 object-cover" src={item.image[0]} alt="" />
              <div>
                <p className="text-base font-medium">{item.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-600">
                <p className="text-lg">{currency}{item.price}</p>
                <p>Quantity : 1</p>
                <p>Size : M</p>
                </div>
                <p className="mt-2">Date : <span className="text-gray-400 pl-1">{date}</span></p>
              </div>
            </div>

            <div className="flex justify-between md:w-1/2">
              <div className="flex items-center gap-2">
               <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
               <p className="text-sm md:text-base">Ready to ship</p>
              </div>
              <button className="text-sm md:text-base border border-gray-300 rounded-md px-4 py-2">Track Order</button>
            </div>
          </div>
        })
      }
     </div>
    </div>
  )
}

export default Orders