import{ useEffect, useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo.png'
import { Link } from'react-scroll'
const NavBar = () => {
  const [sticky, setSticky] = useState(false);
  // gestion du background du navbar 
  useEffect(()=> {
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[]);
  return (
    <nav className={`container ${sticky ? 'dark-anv':''}` }>
      <img className='logo' src={logo} alt=""/>
      <ul>
        <li><Link to='accueil' smouth={true} offset={0} duration={500}> Accueil </Link></li>
        <li><Link to='programme' smouth={true} offset={-300} duration={500}> Programme</Link></li>
         <li><Link to='campus' smouth={true} offset={-300} duration={500}> Campus</Link></li>
        <li><Link to='temoignage' smouth={true} offset={-300} duration={500}> Temoignages</Link></li>
        <li><Link className='btn' to='contact' smouth={true} offset={-300} duration={500}> Contactez-nous </Link></li>
      </ul> 
    </nav>
  )
}

export default NavBar