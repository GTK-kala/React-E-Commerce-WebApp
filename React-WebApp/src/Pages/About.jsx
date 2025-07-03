import Title from '../Components/Title'
import NewSletterBox from '../Components/NewsletterBox'
import {assets} from '../frontend_assets/assets'

const About = () => {

  const Array = ['ABOUT','US'];
  const Aray2 = ['WHY','CHOOSE US'];

  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title Text={Array}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col gap-6 justify-center md:w-2/4 text-gray-600 '>
            <p> Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. 
              Our journey began with a simple idea: to provide a platform where customers can easily discover , 
              explore, and purchase a wide range of products from the comfort of their homes.
            </p>
            <p> We believe that shopping should be an enjoyable and seamless experience, 
              which is why we have curated a diverse selection of high-quality products to cater to every taste and preference. 
              Our team is dedicated to ensuring that each customer finds exactly what they are looking for, 
              and we are constantly updating our inventory to include the latest trends and must-have items.
            </p>
            <b className='text-gray-800 text-2xl'>Our Mission</b>
            <p>Our mission at Forever is to empower customers by providing them with a seamless and enjoyable shopping experience. 
              We strive to offer a diverse range of high-quality products that cater to every taste and preference, 
              while ensuring that our platform is user-friendly and accessible to all.
            </p>
        </div>
      </div>
      <div className='text-2xl'>
        <Title Text={Aray2} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticuliously select and vet each product to ensure it meets our high standards of quality.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With our user friendly interface and hassle free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way , ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewSletterBox />
    </div>
  )
}

export default About