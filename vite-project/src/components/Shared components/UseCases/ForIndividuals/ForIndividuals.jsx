import CardAndButton from "../CardAndButton/CardAndButton"
import CardContiner from "../CardContiner/CardContiner"
import Tittle from "../Tittle/Tittle"
import { product } from "../data.js";
import productData from "../data.js";
import './ForIndividuals.css'

//the section that contains everything except the headline
const ForIndividuals = ({revers ,tittle,description ,data,datas}) => {
    return (
        <div className={` ak_for_individuals ${revers ? "revers" :''}`}>
            <div className="ak_productdata">
            {data && data.map((item, index) => {
                    return(
                        <CardContiner
                            key={index}
                            icon={item.icon}
                            tittle={item.tittle}/>
                            
                    )
                })}
                </div>
            <div className="ak_countinar">  
                    <Tittle 
                        tittle={tittle}
                        description={description}
                        className="tittle_variant"
                        
                    />
                    <div className="ak_card_grids">
                        {datas &&datas.map((item, index) =>{
                                return(
                                    <CardAndButton
                                        key={index}
                                        icon={item.icon}
                                        tittle={item.tittle}
                                        />
                                        
                                )
                            })}
                        </div>
                        <button className="ak_button">Learn More</button>
            </div> 
        
        </div>
    )
}

export default ForIndividuals
