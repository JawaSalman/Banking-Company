import { useState, useEffect } from "react";
import "./OurBenefits.css";
import BenefitsCard from "./BenefitsCard";

//  مفتاح منفصل للـ LocalStorage
const STORAGE_KEY = "tableData-2-1";

// Default benefits data
const defaultBenefits = [
  {
    id: 1,
    image: "/Images/CareersPage/Competitive Compensation.png",
    title: "Competitive Compensation",
    description:
      "We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.",
  },
  {
    id: 2,
    image: "/Images/CareersPage/Health and Wellness.png",
    title: "Health and Wellness",
    description:
      "We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.",
  },
  {
    id: 3,
    image: "/Images/CareersPage/Retirement Planning.png",
    title: "Retirement Planning",
    description:
      "YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.",
  },
  {
    id: 4,
    image: "/Images/CareersPage/Work-Life Balance.png",
    title: "Work-Life Balance",
    description:
      "We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.",
  },
];

const OurBenefits = () => {
  // ================= State: Benefits =================
  const [benefits, setBenefits] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved || saved === "null") return defaultBenefits;

      const parsed = JSON.parse(saved);
      if (!Array.isArray(parsed)) return defaultBenefits;

      
      return parsed.map((item) => ({
        id: item.id,
        image: item.image,
        title: item.title,
        description: item.description || "",
      }));
    } catch {
      return defaultBenefits;
    }
  });

  // ================= Persist =================
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(benefits));
  }, [benefits]);

  // ================= Control Load All / See Less =================
  const [isOpen, setIsOpen] = useState(false);
  const visibleBenefits = isOpen ? benefits : benefits.slice(0, 4);

  const loadAll = () => setIsOpen(true);
  const seeLess = () => setIsOpen(false);

  return (
    <section className="mh-benefits">
      {/* Header */}
      <div className="mh-benefits-header">
        <h1>
          Our <span>Benefits</span>
        </h1>
        <p>
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="mh-benefits-grid">
        {visibleBenefits.map((item) => (
          <BenefitsCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}

        {/* Shadow overlay when collapsed */}
        {!isOpen && <div className="mh-black-shadow-cont" />}
      </div>

   
    </section>
  );
};

export default OurBenefits;
