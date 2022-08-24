import React from 'react'

function TodoList({todos,setTodos}) {

     

  return (
    <div>
          <ul className="todo-list" >
               {
                    todos.map((todo,index) => {
                         return (
                              <div key={index}>
                                   <li className={todo.completed ? "completed": "" }>
                                        <div className="view">
                                             <input className="toggle" type="checkbox" datatype='boolean' />
                                             <label>{todo.todo}</label>
                                             <button className="destroy"></button>
                                        </div>
                                   </li>
			          	</div> 
                         )
                    })
               }
          </ul>
    </div>
  )
}

export default TodoList