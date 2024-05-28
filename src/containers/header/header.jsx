import React from 'react'
import './header.css'
import illustration from '../../assets/ai.png'
import people from '../../assets/people.png'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <div className='gpt3__header-content__text'>
          <h1 className='gradient__text'>Let’s Build Something
            amazing with GPT-3 OpenAI
          </h1>
          <p className='gpt3__header-content_desc'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <div className='gpt3__header-content__input'>
            <input type='email' placeholder='Your Email Address'></input>
            <button type='button'>Get Started!</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src = {people}/>
            <p>1,600 people requested access a visit in 24 hours</p>
          </div>
        </div>
        <div className='gpt3__header-content__image'>
            <img src = {illustration}/>
        </div>
      </div>
      <div className='gpt3__header-companies_wrapper'>

      <div className='gpt3__header-companies'>
        <img src = {google} />
        <img src = {slack} />
        <img src = {atlassian} />
        <img src = {dropbox} />
        <img src = {shopify} />
      </div>
      </div>

    
    </div>
  )
}

export default Header