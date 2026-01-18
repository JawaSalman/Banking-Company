import ProductCard from "../components/Home components/Our Product//Section/OurProductSection";
import OurTestimonials from "../components/Shared components/OurTestimonials/OurTestimonials";
import FAQs from "../components/Shared components/FAQs/FAQs"
import UseCase from "../components/Home components/UseCases/UseCase/UseCase"
import OurFeatures from "../components/Home components/OurFeatures/OurFeatures";

const Home = () => {
    return (
        <>
            <section>
                <ProductCard />
                <UseCase />
                <OurFeatures />
                <FAQs />
                <OurTestimonials />
            </section>
        </>

    )
}
export default Home
