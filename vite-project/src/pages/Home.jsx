import ProductCard from "../components/Home components/Our Product//Section/OurProductSection";
import OurTestimonials from "../components/Shared components/OurTestimonials/OurTestimonials";
import FAQs from "../components/Shared components/FAQs/FAQs"
import UseCase from "../components/Home components/UseCases/UseCase/UseCase"

const Home = () => {
    return (
        <>
            <section>
                <ProductCard />
                <UseCase />
                <FAQs />
                <OurTestimonials />
            </section>
        </>

    )
}
export default Home
