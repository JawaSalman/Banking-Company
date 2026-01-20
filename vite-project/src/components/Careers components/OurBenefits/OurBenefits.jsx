import "./OurBenefits.css";
import BenefitsCard from "./BenefitsCard";

const OurBenefits = () => {
  const benefits = [
    {
      image: "/Images/CareersPage/Competitive Compensation.png",
      title: "Competitive Compensation",
      desc: "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
    },
    {
      image: "/Images/CareersPage/Health and Wellness.png",
      title: "Health and Wellness",
      desc: "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
    },
    {
      image: "/Images/CareersPage/Retirement Planning.png",
      title: "Retirement Planning",
      desc: "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
    },
    {
      image: "/Images/CareersPage/Work-Life Balance.png",
      title: "Work-Life Balance",
      desc: "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
    },
  ];

  return (
    <section className="mh-benefits">
      {/* ===== Header ===== */}
      <div className="mh-benefits-header">
        <h1>
          Our <span>Benefits</span>
        </h1>
        <p>
          At YourBank, we value our employees and are dedicated to their well-being
          and success. We offer a comprehensive range of benefits designed to
          support their personal and professional growth.
        </p>
      </div>

      {/* ===== Benefits Grid ===== */}
      <div className="mh-benefits-grid">
        {benefits.map((item, index) => (
          <BenefitsCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default OurBenefits;
