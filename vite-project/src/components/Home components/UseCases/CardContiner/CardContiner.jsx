import './CardContiner.css'
// component card left section 
const CardContiner = ({icon,tittle}) => {
    return (
        <div className="ak_cardcontiner">
                    <img src={icon} alt=''/>
                    <p>{tittle}</p>
            
            </div>
    )
}

export default CardContiner
