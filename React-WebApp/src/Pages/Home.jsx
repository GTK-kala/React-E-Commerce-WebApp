import BestSeller from "../Components/BestSeller"
import Hero from "../Components/Hero"
import LatestCollection from "../Components/LatestCollection"
import NewsletterBox from "../Components/NewsletterBox"
import OurPolicy from "../Components/OurPolicy"


const Home = () => {
  return (
    <>
       <Hero />
       <LatestCollection />
       <BestSeller />
       <OurPolicy />
       <NewsletterBox />
    </>
  )
}

export default Home