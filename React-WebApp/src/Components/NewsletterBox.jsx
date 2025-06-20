// import { useRef } from "react"

const NewsletterBox = () => {
    
   const onSubmitHandler =(event) =>{
       event.preventDefault();
   }

  return (
    <div className="text-center">
       <p className="text-2xl font-medium text-gray-800">Subscribr now & get 20% off</p>
       <p className="mt-3 text-gray-400">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, doloremque, beatae labore molestiae facere error aut mollitia fugit accusantium odit alias similique ut nulla tempore. Pariatur excepturi officia eveniet sequi?
       </p>
       <form className="flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2"onSubmit={onSubmitHandler}>
        <input   className="w-full outline-none sm:flex-1" type="email" placeholder="Enter your email" required/>
        <button className="px-4 py-3 text-sm font-bold text-white bg-black cursor-pointer" type="submit">
            SUBSCRIBE
        </button>
       </form>
    </div>
  )
}

export default NewsletterBox