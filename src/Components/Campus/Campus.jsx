import React from 'react';
import './Campus.css';
import galerie1 from '../../assets/galerie-1.jpg';
import galerie2 from '../../assets/galerie-2.jpg';
import galerie3 from '../../assets/galerie-3.png';
import galerie4 from '../../assets/galerie-4.jpg';
import fleche from '../../assets/fleche1.png';

const Campus = () => {
  return (
    <div className='campus' id='campus'>
      <div className='galerie'>
        <img src={galerie1} alt=''/>
        <img src={galerie2} alt=''/>
        <img src={galerie3} alt=''/>
        <img src={galerie4} alt=''/>
      </div>
      <button className='btn dark-btn'>Voir plus <img src={fleche} alt=''/></button>
    </div>
  )
}

export default Campus
