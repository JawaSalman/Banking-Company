import ForIndividuals from "../ForIndividuals/ForIndividuals"
import Tittle from "../Tittle/Tittle"
import './UseCase.css'
//the section is complete

const UseCase = () => {
    return (
        <>
            <section className='ak_use'>
                <Tittle
                    tittle="Use Cases"
                    description="At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions"
                />
                <ForIndividuals />
                <ForIndividuals
                    revers={true} />
            </section>
        </>

    )
}

export default UseCase
