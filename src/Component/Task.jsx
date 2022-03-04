import React, { useState } from 'react'

const Task = ({item, setEdit}) => {
    
  return (
    

    <li>
        <label htmlFor="item-${item.id}" id='' className='todo-left' >
            <input type="checkbox" id="" value="${item.id}" />
            {item.task} 
           
        </label>

        <div className='todo-right'>
            <button 
            type='button'
            className='edit'
            value="${item.id}"
            onClick={()=>{setEdit(item)}}>

            <img className= "img-color" src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"/>
            </button>

            <button type='button' className='delete' value="${item.id}">

                <img className= "img-color" src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png"/>
            </button>

        </div>
    </li>
  )
}

export default Task