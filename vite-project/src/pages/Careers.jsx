import JobOpenings from "../components/Careers components/JobOpenings/JobOpeningsSection/JobOpenings";
import OurBenefits from "../components/Careers components/OurBenefits/OurBenefits";
import OurValues from "../components/Careers components/OurValues";
import FAQs from "../components/Shared components/FAQs/FAQs";
import FinancialCTA from "../components/Shared components/FinancialCTA/FinancialCTA";

const Careers = () => {
    return (
        <>
            <section>
                <OurValues />
                <OurBenefits />
                <FAQs />
                <JobOpenings />
                <FinancialCTA />
            </section>
        </>
    )
}

export default Careers
