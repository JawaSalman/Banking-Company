import CardAndButton from "../CardAndButton/CardAndButton"
import CardContiner from "../CardContiner/CardContiner"
import Tittle from "../Tittle/Tittle"
import { product } from "../data.js";
import productData from "../data.js";
import './ForIndividuals.css'

//the section that contains everything except the headline
const ForIndividuals = ({revers}) => {
    return (
        <div className={` ak_for_individuals ${revers ? "revers" :''}`}>
            <div className="ak_productdata">
            {productData.map((item,index)=>{
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
                        tittle ="For Individuals"
                        description="For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers"
                        className="tittle_variant"
                        
                    />
                    <div className="ak_card_grids">
                        {product.map((item,index)=>{
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
