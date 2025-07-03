import Title from '../Components/Title.jsx'
import NewsletterBox from '../Components/NewsletterBox.jsx'
import {assets} from '../frontend_assets/assets'

const Contact = () => {

  const Array = ['CONTACT','US'];

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
         <Title Text={Array}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-bold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>Email: gtkkala1110@gmail.com</p>
          <p className='text-gray-500'>Phone: +251-91009-0754</p>
          <p className='text-gray-600 font-extrabold'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <p className='text-gray-500'>ETHIOPIA , ADDIS ABABA</p>
          <button className='bg-white text-black py-3 px-5 hover:bg-black hover:text-white transition-all duration-500 border  border-black'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact