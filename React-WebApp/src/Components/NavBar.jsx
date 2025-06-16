import {assets} from '../frontend_assets/assets'
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <img src={assets.logo} className='w-36' alt="Logo-Image" />
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
    </div>
  )
}

export default NavBar