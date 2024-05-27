import  { useRef } from 'react'
import './Temoignages.css'
import next_icon from '../../assets/fleche1.png'
import back_icon from '../../assets/back-icon.jpg'
import user_1 from '../../assets/galerie-2.jpg'

const Temoignages = () => {
  const sliders = useRef();
  let tx = 0;
  const slideNext = ()=> {
    if (tx > -50) {
      tx -= 25;
    }
    sliders.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBack = () => {
    if (tx < 0) {
      tx += 25;
    }
    sliders.current.style.transform = `translateX(${tx}%)`;
 
  }
  return (
    <div className='temoignage' id='temoignage'>
      <img src={next_icon} alt='' className='next-btn' onClick={slideNext} />
      <img src={back_icon} alt='' className='back-btn' onClick={slideBack} />
      <div className='slider'>
        <ul ref={sliders}>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='' className='profil' />
                <div>
                  <h3>Dieuwrigne Atou 1</h3>
                  <span>Daaray xamxam, Touba </span>
                </div>
              </div>
              <p>
                lorem loremloremloremloremloremlorem
                loremloremloremloremlo
                remloremloremloremloremloremloremloremloremlo
                remloremloremloremloremloremlorem
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='' className='profil' />
                <div>
                  <h3>Dieuwrigne Atou 2</h3>
                  <span>Daaray xamxam, Touba </span>
                </div>
              </div>
              <p>
                lorem loremloremloremloremloremlorem
                loremloremloremloremlo
                remloremloremloremloremloremloremloremloremlo
                remloremloremloremloremloremlorem
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='' className='profil' />
                <div>
                  <h3>Dieuwrigne Atou 3</h3>
                  <span>Daaray xamxam, Touba </span>
                </div>
              </div>
              <p>
                lorem loremloremloremloremloremlorem
                loremloremloremloremlo
                remloremloremloremloremloremloremloremloremlo
                remloremloremloremloremloremlorem
              </p>
            </div>
          </li>
          <li>
            <div className='slide'>
              <div className='user-info'>
                <img src={user_1} alt='' className='profil' />
                <div>
                  <h3>Dieuwrigne Atou 4</h3>
                  <span>Daaray xamxam, Touba </span>
                </div>
              </div>
              <p>
                lorem loremloremloremloremloremlorem
                loremloremloremloremlo
                remloremloremloremloremloremloremloremloremlo
                remloremloremloremloremloremlorem
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Temoignages
