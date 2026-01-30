import './CardContiner.css'
// component card left section
const CardContiner = ({ icon, tittle }) => {
    return (
        <div className="ak_cardcontiner border">
            <div className='ak-outer-circle bg-icon'>
                <div className='ak-inner-circle bg-icon'>
                    <img src={icon} alt='' />
                </div>
            </div>
            <p>{tittle}</p>

        </div>
    )
}

export default CardContiner
