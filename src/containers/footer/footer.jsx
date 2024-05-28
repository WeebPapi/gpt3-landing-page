import React from 'react'
import './footer.css'
import gpt3 from '../../assets/GPT-3.svg'
import {List} from '../../components'

const rows1 = ['Overons', 'Social Media', 'Counters', 'Contact']
const rows2 = ['Terms & Conditions', 'Privacy Policy', 'Contact']
const rows3 = ['Crechterwoord K12 182 DK Alknjkcb', '085-132567', 'info@payme.net']

const Footer = () => {
  return (
    <div className='gpt3__footer'>
      <div className='gpt3__footer-top'>
        <h1 className='gradient__text'>Do you want to step in to the <br/> future before others</h1>
        <p >Request Early Access</p>
      </div>
      <div className='gpt3__footer-bottom'>
        <div className='gpt3__footer-bottom-logo'>
          <img src={gpt3}/>
          <p>Crechterwoord K12 182 DK <br/> Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-bottom-lists'>
          <List title='Links' rows={rows1} />
          <List title='Company' rows={rows2} />
          <List title='Get in touch' rows={rows3} />
        </div> 
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer