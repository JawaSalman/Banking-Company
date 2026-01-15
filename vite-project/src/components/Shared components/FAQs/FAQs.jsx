import React from 'react'
import js_data_faqs from './js_data_FAQ'

const FAQs = ({ header, text }) => {
    return (
        <>
            {header && <h1>{header}</h1>}
            {text && <p>{text}</p>}
            <div className="js-faqs-cont">
                {js_data_faqs.map((faq, index) => {
                    return (
                        <div className="js-faqs-card-cont">
                            <h2 className='js-faqs-card-header'>faq.question</h2>
                            <p className='js-faqs-card-paragraph'>faq.answer</p>
                        </div>
                    )
                })}
            </div>
            <button></button>
        </>
    )
}

export default FAQs
