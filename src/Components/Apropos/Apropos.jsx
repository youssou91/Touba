import React from 'react'
import './Apropos.css'
import apropos_img from '../../assets/a_propos.jpg'
import icone_apropos_img from '../../assets/icone_apropos.jpg'

const Apropos = () => {
    return (
        <div className='apropos'>
            <div className='apropos-gauche'>
                <img className='apropos-img' src={apropos_img} alt='' />
                <img className='icone-apropos-img' src={icone_apropos_img} alt='' />
            </div>
            <div className='apropos-droite'>
                <h3> A PROPOS DE L'ETABLISSEMENT </h3>
                <h2>Formons aujourd'hui les leaders de demain</h2>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    It has survived not only five centuries. <br />
                    Aldus PageMaker including versions of Lorem Ipsum.<br />
                </p>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    It has survived not only five centuries. <br />
                    Aldus PageMaker including versions of Lorem Ipsum.<br />
                </p>
                <p>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    It has survived not only five centuries. <br />
                    Aldus PageMaker including versions of Lorem Ipsum.<br />
                </p>
            </div>

        </div>
    )
}

export default Apropos
