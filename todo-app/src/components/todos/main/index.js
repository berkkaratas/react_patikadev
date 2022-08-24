import React from 'react'
import TodoList from './list'

export default function Main({todos,setTodos}) {   

     const markAllComplete = () => {
            setTodos(todos.map(todo => ({ ...todo, completed: true })))
            console.log(todos);
     }
     if(todos.length === 0){
          return (<div></div>);
     }
     

  return (
    <div>
     <section className="main">
		<input className="toggle-all" type="checkbox" />
		<label htmlFor="toggle-all" onClick={markAllComplete}>
			Mark all as complete
		</label>

          <TodoList todos={todos} setTodos={setTodos}/>
		
	</section>
    </div>
  )
}
