import './Programmes.css'
import programme1 from '../../assets/programme1.jpg'
import programme2 from '../../assets/programme2.jpg'
import programme3 from '../../assets/programme3.jpg'
import school from '../../assets/school.png'

const Programmes = () => {
  return (
    <div className='programmes' id='programme'>
      <hr/>
      <div className='programme'>
        <img src={programme1} alt='' />
        <div className='caption'>
          <img src={school} />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className='programme'>
        <img src={programme2} alt='' />
        <div className='caption'>
          <img src={school} />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className='programme'>
        <img src={programme3} alt='' />
        <div className='caption'>
          <img src={school} />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programmes
