import React, { useState } from "react";
import '../todolist.css'
import Header from "./Header";


const TodoList = () =>{
    return(
        <div>
           <Header/>
           <div className="container">
                <form className="todo_form" autoComplete="off">
                    <button type="submit" className="submit_btn">Submit</button>
                    <input type="text" name="add_todo" placeholder="Create a new todo..." />
                    <input type="text" name="hidden_item" hidden />
                </form>

                <div className="todo-items-wrapper">
                    <ul className="todo-items"></ul>

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
                </div>
        </div>
    )
}
export default TodoList;