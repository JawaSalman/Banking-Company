

import "./SectionTitle.css";

const SectionTitle = ({ ftitle, title, subTitle, fbutton, sbutton, activeTab, setActiveTab }) => {
    return (
        <div className="ma-container flex-between section-margin">
            <div className="ma-fsection ">
                <h1>
                    {ftitle} {" "}
                    <span>{title}</span>

                </h1>
                <p>{subTitle}</p>
            </div>
            <div className="ma-btns flex-center">
                <button
                    className={activeTab === 'individual' ? 'ma-btn active' : 'ma-btn'}
                    onClick={() => setActiveTab('individual')}>{fbutton}</button>
                <button className={activeTab === 'business' ? 'ma-btn active' : 'ma-btn'}
                    onClick={() => setActiveTab('business')}>{sbutton}</button>
            </div>
        </div>
    )
}

export default SectionTitle
