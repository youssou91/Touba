import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import Programmes from './Components/Programmes/Programmes'
import Titre from './Components/Titres/Titre'
import Apropos from './Components/Apropos/Apropos'
import Campus from './Components/Campus/Campus'
import Temoignages from './Components/Temoignages/Temoignages'
import Contact from './Components/Contacts/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className='container'>
        <Titre sousTitre='Notre Programme' titre='Ce que nous vous offrons' />
        <Programmes />
        <Apropos />
        <Titre sousTitre='Galerie' titre='Photos du campus' />
        <Campus />
        <Titre sousTitre='TEMOIGNAGES' titre='Mots des etudiants' />
        <Temoignages />
        <Titre sousTitre='CONTECTEZ-NOUS' titre='Entrez en contact' />
        <Contact />
        <Footer/>
      </div>
    </div>
  )
}

export default App