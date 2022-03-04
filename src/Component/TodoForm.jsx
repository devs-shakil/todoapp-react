import React from 'react'

const TodoForm = ()  => {
  return (
     <form className="todo_form" autoComplete="off">
          <button type="submit" className="submit_btn"
          >Submit</button>

           <input type="text" name="add_todo" placeholder="Create a new todo..." />
           
            <input type="text" name="hidden_item" hidden />
     </form>

  )
}

export default TodoForm