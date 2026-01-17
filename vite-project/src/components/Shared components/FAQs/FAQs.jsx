import React, { useState } from 'react'
import js_data_faqs from './js_data_FAQ'
import './FAQs.css'
import js_arrowUp from '/Images/Home Page/Up Arrow.png'
import js_arrowDown from '/Images/Home Page/Down Arrow.png'



const FAQs = () => {
    const [js_faqs_isOpen, js_faqs_setOpen] = useState(false)
    const jsLoadAllFAQs = () => {
        js_faqs_setOpen(prev => !prev)

    }
    const jsSeeLessFAQs = () => {
        js_faqs_setOpen(prev => !prev)
    }
    const jsVisibleFAQs = js_faqs_isOpen ? js_data_faqs : js_data_faqs.slice(0, 4)

    return (
        <>
            <div className="js_FAQs_section">
                <h1><span>Frequently</span> Asked Questions</h1>
                <p>Still you have any questions? Contact our Team via support@yourbank.com</p>
                <div className="js-faqs-cont">
                    {jsVisibleFAQs.map((faq, index) => {
                        return (
                            <div className="js-faqs-card-cont" key={index}>
                                <h2 className='js-faqs-card-header'>{faq.question}</h2>
                                <p className='js-faqs-card-paragraph'>{faq.answer}</p>
                            </div>
                        )
                    })}
                    <div className={`js-black-shadow-cont ${js_faqs_isOpen ? 'js-btn-hide' : ''}`}></div>
                </div>
                <button onClick={jsLoadAllFAQs}
                    className={` js-faqs-loadall-btn border flex-center ${js_faqs_isOpen ? 'js-btn-hide' : ''}`}
                >Load All FAQs
                    <img src={js_arrowDown} alt="" />
                </button>
                <button onClick={jsSeeLessFAQs}
                    className={` js-faqs-loadall-btn border flex-center ${js_faqs_isOpen ? '' : 'js-btn-hide'}`}
                >See Less FAQs
                    <img src={js_arrowUp} alt="" />
                </button>
            </div>
        </>
    )
}

export default FAQs
