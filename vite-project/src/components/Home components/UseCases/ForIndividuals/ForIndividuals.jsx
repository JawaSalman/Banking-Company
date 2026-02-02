import CardAndButton from "../CardAndButton/CardAndButton"
import CardContiner from "../CardContiner/CardContiner"
import Tittle from "../Tittle/Tittle"
import './ForIndividuals.css'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { fadeIn } from "../../../Animation/Animation";

//the section that contains everything except the headline
const ForIndividuals = ({ revers, tittle, description, data, datas }) => {
    return (
        <motion.div
            variants={fadeIn("up", 0, 0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}

            className={` ak_for_individuals ${revers ? "revers" : ''}`}>
            <div className="ak_productdata">
                {data && data.map((item, index) => {
                    return (
                        <CardContiner
                            key={index}
                            icon={item.icon}
                            tittle={item.tittle} />

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
                    {datas && datas.map((item, index) => {
                        return (
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

        </motion.div>
    )
}

export default ForIndividuals
