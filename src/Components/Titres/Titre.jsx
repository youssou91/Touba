import React from 'react'
import './Tritres.css'

const Titre = ({sousTitre, titre}) => {
  return (
    <div className='titres'>
      <p>{sousTitre}</p>
      <h2>{titre}</h2>
    </div>
  )
}

export default Titre
