
import TittleHero from '../TittleHero/TittleHero'
import './Hero.css'


const Hero = ({ imagesrc, children ,tittletop}) => {
    return (
        <div className="ak_hero ak-hero-margin">
            <img src={imagesrc} />
            <TittleHero top={tittletop}>
                {children}
            </TittleHero>
        </div>
    )
}

export default Hero