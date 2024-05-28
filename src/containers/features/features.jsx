import React from 'react'
import './features.css'
import possibilityPic from '../../assets/possibility.png'

const Features = () => {
  return (
    <div className='gpt3__features section__padding'>
      <div className='gpt3__features-container'>
        <div className='gpt3__features-container_image'>
          <img src={possibilityPic} />
        </div>
        <div className='gpt3__features-container_text'>
          <p className='gpt3__features-container__text-p1'>Request Early Access to Get Started</p>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p className='gpt3__features-container__text-p2'>Request Early Access to Get Started</p>
        </div>
      </div>
    </div>
  )
}

export default Features