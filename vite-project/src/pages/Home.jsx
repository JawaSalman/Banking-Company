import ProductCard from "../components/Home components/Our Product//Section/OurProductSection";
import OurTestimonials from "../components/Shared components/OurTestimonials/OurTestimonials";
import FAQs from "../components/Shared components/FAQs/FAQs"
import UseCase from "../components/Home components/UseCases/UseCase/UseCase"
import FinancialCTA from "../components/Shared components/FinancialCTA/FinancialCTA";
import TextureLeft from '/Images/HomePage/Texture - Left.png'
import Transactions from '/Images/HomePage/Transactions.webp'
import CheckIcon from '../../public/Images/HomePage/Check Icon.png'
import AbstractDesign from '/Images/HomePage/Abstract Design.webp'
import HomeHero from '../components/Home components/HomeHero/HomeHero'
const Home = () => {
  return (
    <>
      <section>
        <HomeHero
          icon={CheckIcon}
          iconText="No LLC Required, No Credit Check."
          title={`Welcome to YourBank<br>Empowering Your <span>Financial Journey</span>`}
          description="At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs."
          buttonText=" Open Account"
          images={[AbstractDesign, Transactions]}
        />
        <ProductCard />
        <UseCase />
        <FAQs />
        <OurTestimonials />
        <FinancialCTA
          title={
            "Start your financial journey with <span>YourBank today!</span>"
          }
          description="Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus."
          buttonText="Open Account"
          image={TextureLeft}
        />
      </section>
    </>

  )
}
export default Home
