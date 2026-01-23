// React core import with hooks for state and lifecycle management
import React, { useState, useEffect } from 'react';

// FAQ data source
import js_data_faqs from './js_data_FAQ';

// Component-specific styles
import './FAQs.css';

// UI icons for expand/collapse actions
import js_arrowUp from '/Images/HomePage/Up Arrow.png';
import js_arrowDown from '/Images/HomePage/Down Arrow.png';

// Key used for saving FAQ data in localStorage
const STORAGE_KEY = "tableData-1-2";

/**
 * FAQs Component
 * --------------
 * Displays a list of frequently asked questions.
 * Supports "Load All" and "See Less" functionality.
 * FAQ data is persisted using localStorage.
 */
const FAQs = () => {
 
  /**
   * State: faqs
   * ------------
   * Initializes FAQ list from localStorage if available,
   * otherwise loads default data from js_data_faqs.
   */
  const [faqs, setFaqs] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : js_data_faqs;
  });

  /**
   * Effect: Persist FAQs
   * --------------------
   * Updates localStorage whenever FAQ data changes.
   */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(faqs));
  }, [faqs]);

  /**
   * State: js_faqs_isOpen
   * ---------------------
   * Controls whether all FAQs are visible or only a limited subset.
   */
  const [js_faqs_isOpen, js_faqs_setOpen] = useState(false);

  /**
   * Show all FAQ items
   */
  const jsLoadAllFAQs = () => {
    js_faqs_setOpen(true);
  };

  /**
   * Collapse FAQ list to initial view
   */
  const jsSeeLessFAQs = () => {
    js_faqs_setOpen(false);
  };

  /**
   * Determine which FAQs should be visible:
   * - All FAQs if expanded
   * - First 4 FAQs if collapsed
   */
  const jsVisibleFAQs = js_faqs_isOpen ? faqs : faqs.slice(0, 4);

  return (
    <div className="js_FAQs_section">
      
      {/* Section heading */}
      <h1><span>Frequently</span> Asked Questions</h1>
      <p>Still you have any questions? Contact our Team via support@yourbank.com</p>

      {/* FAQ cards container */}
      <div className="js-faqs-cont">
        {jsVisibleFAQs.map((faq, index) => (
          
          // Individual FAQ card
          <div className="js-faqs-card-cont" key={index}>
            <h2 className='js-faqs-card-header'>{faq.question}</h2>
            <p className='js-faqs-card-paragraph'>{faq.answer}</p>
          </div>
        ))}

        {/* Shadow overlay when FAQs are collapsed */}
        <div className={`js-black-shadow-cont ${js_faqs_isOpen ? 'js-btn-hide' : ''}`} />
      </div>

      {/* Load all FAQs button */}
      <button
        onClick={jsLoadAllFAQs}
        className={`js-faqs-loadall-btn border flex-center ${js_faqs_isOpen ? 'js-btn-hide' : ''}`}
      >
        Load All FAQs
        <img src={js_arrowDown} alt="arrow down" />
      </button>

      {/* Collapse FAQs button */}
      <button
        onClick={jsSeeLessFAQs}
        className={`js-faqs-loadall-btn border flex-center ${js_faqs_isOpen ? '' : 'js-btn-hide'}`}
      >
        See Less FAQs
        <img src={js_arrowUp} alt="arrow up" />
      </button>
    </div>
  );
};

export default FAQs;
