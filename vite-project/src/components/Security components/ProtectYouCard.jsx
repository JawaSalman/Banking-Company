
import "./HowProtectYou.css"
const ProtectYouCard = ({imag,title,paragraph}) => {
    
    return (
            <div className="mar-card">
                <div className="firstSection-card">
                    <div className="img-card">
                        <img src={imag} alt="logo"/>
                    </div>
                    <h1>{title}</h1>
                </div>
                <p className="mar-card-p">{paragraph}</p>
                
            </div>
    )
}

export default ProtectYouCard
