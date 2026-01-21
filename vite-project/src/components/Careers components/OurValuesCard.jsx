
import "./OurValues.css"

const OurValuesCard = ({ title, paragraph }) => {
    return (
        <>
            <div className="ma-ourValues-card">
                <div className="ma-card">
                    <h1 className="ma-card-title">{title}</h1>
                    <p className="ma-card-p">{paragraph}</p>
                </div>
            </div>
        </>
    )
}

export default OurValuesCard
