import { useState } from 'react'
import './OurFeatures.css'
import FeatureCard from './FeatureCard'

const OurFeatures = () => {

  // ================= Active Category =================
  const [selectedCategory, setSelectedCategory] = useState("Online Banking")

  // ================= Features Data =================
  const featuresData = [

    // ===== Online Banking  =====
    {
      title: "24/7 Account Access",
      description:
        "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
      category: "Online Banking"
    },
    {
      title: "Mobile Banking App",
      description:
        "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
      category: "Online Banking"
    },
    {
      title: "Secure Transactions",
      description:
        "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
      category: "Online Banking"
    },
    {
      title: "Bill Pay and Transfers",
      description:
        "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
      category: "Online Banking"
    },

    // ===== Financial Tools  =====
    {
      title: "Financial Tool One",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Financial Tools"
    },
    {
      title: "Financial Tool Two",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Financial Tools"
    },
    {
      title: "Financial Tool Three",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Financial Tools"
    },
    {
      title: "Financial Tool Four",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Financial Tools"
    },

    // ===== Customer Support  =====
    {
      title: "Support Feature One",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Customer Support"
    },
    {
      title: "Support Feature Two",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Customer Support"
    },
    {
      title: "Support Feature Three",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Customer Support"
    },
    {
      title: "Support Feature Four",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Customer Support"
    }
  ]

  return (
    <section className="mh-features-section">

      {/* ===== Header ===== */}
      <div className="mh-features-header">
        <h1>Our <span>Features</span></h1>
        <p>
          Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience
        </p>
      </div>

      <div className="mh-features-content">

        {/* ===== Sidebar ===== */}
        <aside className="mh-features-sidebar">
          {["Online Banking", "Financial Tools", "Customer Support"].map(category => (
            <button
              key={category}
              className={`mh-feature-btn ${
                selectedCategory === category ? "mh-feature-active" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </aside>

        {/* ===== Cards ===== */}
        <div className="mh-features-cards">
          {featuresData
            .filter(feature => feature.category === selectedCategory)
            .map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default OurFeatures
