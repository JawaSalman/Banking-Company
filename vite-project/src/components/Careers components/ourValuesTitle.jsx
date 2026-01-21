
import "./OurValues.css"
const ourValuesTitle = ({ ftitle, title, subTitle }) => {
    return (
        <div className="ma-ourValues-Title ma-ov-container section-margin">
            <h1>{ftitle} {" "}
                <span>{title}</span>
            </h1>
            <p>{subTitle}</p>
        </div>
    )
}

export default ourValuesTitle

