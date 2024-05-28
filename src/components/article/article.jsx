import React from 'react'
import './article.css'

const Article = ({imgSrc, date, headline}) => {
  return (
    <div className='gpt3__article'>
      <div className='gpt3__article-image'>
        <img src={imgSrc}/>
      </div>
      <div className='gpt3__article-text'>
        <p>{date}</p>
        <h2>{headline}</h2>
        <p className='gpt3__article-read'>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article