import React from 'react'
import './list.css'

const List = ({rows,title}) => {
  return (
    <div className='gpt3__list'>
        <p>{title}</p>
        <ul>
            {
                rows.map((item, index) => (
                  <li key={item + index}><p>{item}</p></li>  
                ))
            }
        </ul>
    </div>
  )
}

export default List