import React, { useRef, useState } from 'react'

const TodoForm = ({tasks, setTodoTasks})  => {
   const [task, setTask] = useState (""); 
   const inputRef = useRef(null);
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const item = {
            id: Date.now(),
            task:task,
            isCompleted: false,

        };
        
        setTodoTasks([item, ...tasks]);
        e.target.reset(item)
       
    }
  return (
     <form className="todo_form" autoComplete="off" onSubmit={handleSubmit}>
          <button type="submit" className="submit_btn"
          >Submit</button>

           <input
            type="text" 
            name="add_todo"
            placeholder="Create a new todo..."
            onChange={(e)=>setTask(e.target.value)}
              />

            <input type="text" name="hidden_item" hidden />
     </form>

  )
}

export default TodoForm