import {assets} from '../frontend_assets/assets'
import {NavLink , Link} from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react';
import {ShopContext} from '../Context/ShopContext'

const NavBar = () => {
   const [visible , setVisible] = useState(false);
   const { setShowSearch , getCartCount } = useContext(ShopContext)

  return (
    <div className="flex items-center justify-between py-5 font-medium">
    {/* Logo and Navigation Links */}
        <Link to='/'>
         <img src={assets.logo} className='w-36' alt="Logo-Image" />
        </Link>
      <ul className='hidden gap-5 text-sm text-gray-700 sm:flex'>
         <NavLink to='/' className='flex flex-col items-center gap-1'>
           <p>HOME</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>
         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
           <p>COLLECTION</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>
         <NavLink to='/about' className='flex flex-col items-center gap-1'>
           <p>ABOUT</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>
         <NavLink to='/contact'  className='flex flex-col items-center gap-1'>
           <p>CONTACT</p>
           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
         </NavLink>
      </ul>
        <div className="flex gap-6 item-center">
         <img className='w-4 cursor-pointer' src={assets.search_icon} alt="Search-Image" onClick={() =>{setShowSearch(true)}}/>
          <div className="relative group">
             <img className='w-4 cursor-pointer' src={assets.profile_icon} alt="Profile-Image" />
             <div className='absolute right-0 hidden pt-4 group-hover:block dropdown-menu'>
              <div className="flex flex-col gap-2 px-5 py-3 text-gray-500 rounded bg-slate-100">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
             </div>
          </div>
          <Link to='/cart' className='relative'>
             <img className='w-4 min-w-4' src={assets.cart_icon} alt="Cart-Image" />
              <span className='absolute w-4 h-4 text-center text-white bg-black leading-4 right-[-9px] top-[-5px] aspect-square rounded-full text-[10px]'>{getCartCount()}</span>
          </Link>
          <img className='w-4 cursor-pointer sm:hidden' src={assets.menu_icon} alt="Menu-Image" onClick={() => setVisible(true)}/>
        </div> 
      {/* Sidebar menu for small screens */}
         <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white  transition-all ${visible ? 'w-full' : 'w-0'} sm:hidden`}>
          <div className='flex flex-col text-gray-700'>
            <div className='flex items-center gap-4 p-3 cursor-pointer' onClick={() => setVisible(false)}>
              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="DropDown-Icon" />
              <p className='text-sm'>Back</p>
            </div>
            <NavLink onClick={() =>{setVisible(false)}} className='py-2 pl-6 border' to='/'>Home</NavLink>
            <NavLink onClick={() =>{setVisible(false)}} className='py-2 pl-6 border' to='/collection'>COLLECTION</NavLink>
            <NavLink onClick={() =>{setVisible(false)}} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
            <NavLink onClick={() =>{setVisible(false)}} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
          </div>
         </div>
    </div>
  )
}

export default NavBar