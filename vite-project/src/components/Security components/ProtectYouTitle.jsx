

import "./HowProtectYou.css"
const ProtectYouTitle = ({ftitle,title,subTitle}) => {
    return (
        <>
            <div className="mar-ProtectYou-Title  section-margin">
                <h1>{ftitle} {" "}
                    <span>{title}</span>
                </h1>
                <p>{subTitle}</p>
            </div>
            
        </>
    )
}

export default ProtectYouTitle
