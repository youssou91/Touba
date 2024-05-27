import './Hero.css'
import fleche from '../../assets/fleche1.png'

const Hero = () => {
    return (
        <div className='hero container' id='accueil'>
            <div className='hero-text'>
                <h1>
                    Nous assurons une meilleure education pour un monde meilleur.
                </h1>
                <p>
                    Notre programme d'etudes de pointe est concu pour donner aux etudiants les connaissances, les Componences, et l'experience necessaires pour exceller
                </p>
                <button className='btn'>Explorer plus <img src={fleche} alt=''/></button>
            </div>
        </div>
    )
}

export default Hero  