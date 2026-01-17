import './CardAndButton.css'
//component card right section 
const CardAndButton = ({icon,tittle}) => {
    return (
    <div className="ak_cardandbutton">
                <img src={icon} alt=''/>
                <p>{tittle}</p>
                </div>
                
    )
}

export default CardAndButton
