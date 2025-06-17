import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext";
import Title from "./Title";

const LatestCollection = () => {
     
     const {products} = useContext(ShopContext);
        
  return (
    <div className="my-10">
        <div className="py-8 text-3xl text-center">
            <Title Text1={'LATEST'} Text2={'COLLECTION'} />
        </div>
    </div>
  )
}

export default LatestCollection