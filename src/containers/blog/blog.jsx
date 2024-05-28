import React from 'react'
import './blog.css'
import { Article } from '../../components'
import blog1 from '../../assets/blog01.png'
import blog2 from '../../assets/blog02.png'
import blog3 from '../../assets/blog03.png'
import blog4 from '../../assets/blog04.png'
import blog5 from '../../assets/blog05.png'

const blogData = [
  {imgSrc: blog2,
    date: 'Sep 26, 2021',
    headline: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {imgSrc: blog3,
    date: 'Sep 26, 2021',
    headline: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {imgSrc: blog4,
    date: 'Sep 26, 2021',
    headline: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },
  {imgSrc: blog5,
    date: 'Sep 26, 2021',
    headline: 'GPT-3 and Open  AI is the future. Let us exlore how it is?'
  },

]

const Blog = () => {
  return (
    <div className='gpt3__blog__wrapper'>
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, <br/>
We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-articles'>
        <div className='gpt3__blog-articles-single'>
          <Article imgSrc={blog1} date='Sep 26, 2021' headline='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className='gpt3__blog-articles-grid'>
          {blogData.map((item, index) => (
            <Article imgSrc={item.imgSrc} date={item.date} headline={item.headline} key={item.headline + index} />
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Blog