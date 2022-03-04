import React, { useState } from 'react'
import Footer from './Footer'
import TodoForm from './TodoForm'

const Home = () => {
    const [todoTasks, setTodoTasks] = useState([]);
  

  return (
    
    <div className="container">
                
          <TodoForm tasks={todoTasks} setTodoTasks={setTodoTasks}/>
          <Footer  todoTasks={todoTasks}/>
    </div>
  )
}

export default Home