import SectionTitle from "./SectionTitle"
import Slider from "../Slider/Slider"
import TestimonialCard from "./TestimonialCard";
import { useState } from 'react';
import { cardData } from "./TestimonialsData";
import "./SectionTitle.css";


const OurTestimonials = () => {
    const [activeTab, setActiveTab] = useState('individual');
    return (
        <>
            <SectionTitle className="ma-ourtest"
                ftitle="Our"
                title="Testimonials"
                subTitle="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer
                service. See why our clients trust us for a secure and prosperous financial journey"

                activeTab={activeTab}
                setActiveTab={setActiveTab}
                fbutton="For Individuals"
                sbutton="For Businesses"
            />
            <Slider totalItems={cardData.length}>
                {cardData.map((item) => (
                    <TestimonialCard
                        key={item.id}
                        image={item.image}
                        clientOpinen={item.clientOpinen}
                        clientName={item.clientName}
                    />
                ))}
            </Slider>
        </>
    )
}

export default OurTestimonials
