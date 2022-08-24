import React from 'react';
import { useState } from 'react';

function Header({todos, addTodo }) {
     const [form,setForm] = useState({todo:'',completed:false});

     const onChangeInput = (e) => {
          setForm({...form,[e.target.name]:e.target.value})
     }
     const clearForm = (e) => {
          e.preventDefault();
          setForm({todo:''})
     }
     const handleKeyDown = (e) => {
          if (e.key === 'Enter') {
               e.preventDefault();
               if(form.todos === ''){
                    alert('Enter a todo')
                    return false;
               }
               addTodo([...todos,form]);
               console.log(form);
               clearForm(e);
          }
        }

  return (
    <div>
          <header class="header">
               <h1>todos</h1>
               <form>
                    <input 
                         className="new-todo" 
                         placeholder="What needs to be done?" 
                         name='todo' 
                         value={form.todo} 
                         autoFocus 
                         onChange={onChangeInput} 
                         onKeyDown={handleKeyDown} 
                    />
               </form>
          </header>
    </div>
  )
}

export default Header