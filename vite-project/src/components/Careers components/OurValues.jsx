
import "./OurValues.css";
import OurValuesCard from "./OurValuesCard";
import OurValuesTitle from "./ourValuesTitle";
import { CardData } from "./OurValuesCardData";
const OurValues = () => {
    return (
        <section className="section-margin ma-ourValues-section">
            <OurValuesTitle
                ftitle="Our"
                title="Values"
                subTitle="At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals."
            />
            <div className="ma-values-grid ma-ov-container">
                {CardData.map((item) => (
                    <OurValuesCard
                        key={item.id}
                        title={item.title}
                        paragraph={item.paragraph}
                    />
                ))}
            </div>
        </section>
    );
}

export default OurValues
