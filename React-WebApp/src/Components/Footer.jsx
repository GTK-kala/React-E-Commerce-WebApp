import { assets } from "../frontend_assets/assets"

const Footer = () => {
    const year = new Date().getFullYear();
    
  return (
    <>
       <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm text-gray-500">
         <div>
            <img className="w-32 mb-5" src={assets.logo} alt="Assets Logo" />
            <p className="w-full text-gray-600 md:w-2/3">
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur commodi molestias nam molestiae exercitationem minus accusantium totam mollitia dicta ipsa, quam doloremque? Vitae debitis veniam molestiae sit culpa sapiente molestias?
            </p>
         </div>
         <div>
            <p className="mb-5 text-xl font-medium">
              COMPANY
            </p>
            <ul className="flex flex-col gap-2 text-gray-700">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
         </div>
         <div>
            <p className="mb-5 text-xl font-medium">GET IN TOUCH </p>
            <ul className="flex flex-col gap-2 text-gray-700">
                <li>+251-91009-0754</li>
                <li>gtkkala1110@gmail.com</li>
            </ul>
         </div>
       </div>
       <div>
         <hr />
         <p className="py-5 text-xl text-center">Copyright {year} @forever.com - All Right Reserved.</p>
      </div>         
    </>
  )
}

export default Footer