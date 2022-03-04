import React, { useState } from 'react'
import Task from './Task'

const Footer = ({todoTasks}) => {
    const [edit, setEdit] = useState({});
    console.log(edit)
  return (
    <div className="todo-items-wrapper">
        {Array.isArray(todoTasks) && todoTasks.length>0 && (
                 <ul className="todo-items">
                     {todoTasks.map(item=>(
                        <Task
                          key ={item.id}
                          item={item} 
                          setEdit={setEdit}
                        />
                     ))}
                    
                 </ul>
        )}
           

        <div className="todo-footer">
            <div className="left-items">5 Items left</div>
            <ul className="footer-menus">
                <li className="all selected">All</li>
                <li className="active">Active</li>
                <li className="completed">Completed</li>
            </ul>
             <button className="clear-completed">Clear Completed</button>
        </div>
    </div>
  )
}

export default Footer