import {assets} from '../frontend_assets/assets'

const Hero = () => {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
    {/*---------------------Hero Left Side----------------------*/}
      <div className="flex justify-center w-full py-10 sm:w-1/2 item-center sm:py-0">
       <div className="text-[#414141]">
          <div className="flex items-center gap-2">
             <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
             <p className="text-sm font-medium md:text-base">OUR BEST SELLERS</p>    
          </div>
          <h1 className="text-3xl leading-relaxed prata-regular sm:py-3 lg:text-5xl">Latest Arrivals</h1>
          <div className="flex gap-2 item-center">
            <p className="text-sm font-semibold md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414141] relative -bottom-3"></p>
          </div>
       </div>
      </div>
    {/*---------------------Hero Right Side----------------------*/}
        <img  className="object-cover w-full sm:w-1/2"  src={assets.hero_img} alt="Hero Image"/>
    </div>
  )
}

export default Hero