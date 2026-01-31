import SectionTitle from "./SectionTitle";
import Slider from "../Slider/Slider";
import TestimonialCard from "./TestimonialCard";
import { useState, useEffect } from 'react';
import { cardData } from "./TestimonialsData";
import "./SectionTitle.css";
const OurTestimonials = () => {
    const DASHBOARD_KEY = "tableData-1-3";
    const [allTestimonials, setAllTestimonials] = useState(() => {
        const savedData = localStorage.getItem(DASHBOARD_KEY);
        return savedData ? JSON.parse(savedData) : cardData;
    });

    useEffect(() => {
        if (!localStorage.getItem(DASHBOARD_KEY)) {
            localStorage.setItem(DASHBOARD_KEY, JSON.stringify(cardData));

            setAllTestimonials(cardData);
        }
    }, [cardData]);

    const [activeTab, setActiveTab] = useState('individual');
    const filteredData = allTestimonials.filter(item => item.category === activeTab);

    return (
        <>
            <SectionTitle
                className="ma-ourtest"
                ftitle="Our"
                title="Testimonials"
                subTitle="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                fbutton="For Individuals"
                sbutton="For Businesses"
            />
            <Slider key={activeTab} totalItems={filteredData.length}>
                {filteredData.map((item) => (
                    <TestimonialCard
                        key={item.id}
                        image="/Images/HomePage/Qutation.png"
                        clientOpinen={item.clientOpinen}
                        clientName={item.clientName}
                    />
                ))}
            </Slider>
        </>
    );
};

export default OurTestimonials;
