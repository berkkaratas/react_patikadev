import React, { useState } from 'react'

function Form({addContact,contacts}) {

     const [form,setForm] = useState({fullname:'',phone_number:''});
     const onChangeInput = (e) => {
          setForm({...form,[e.target.name]:e.target.value})}

     const clearForm = (e) => {
          e.preventDefault();
          setForm({fullname:'',phone_number:''})
     }
     const onSubmit = (e) => {
          e.preventDefault();
          if(form.fullname === '' || form.phone_number === ''){
               alert('Please fill all fields')
               return false;
          }
          addContact([...contacts,form]);// this funcion is coming from the parent component with props
          console.log(form);
          clearForm(e);
     }
  return (
    <div>
          <form >
               <div>
                    <input name='fullname' value={form.fullname} placeholder='Full Name' onChange={onChangeInput} ></input>
               </div>
               <div>
                    <input name='phone_number' value={form.phone_number} placeholder='Phone Number' onChange={onChangeInput} ></input>
               </div>
               <div>
                    <button onClick={onSubmit}>Add Contact</button>
               </div>
               <div>
                    <button onClick={clearForm}>Clear</button>
               </div>

          </form>
    </div>
  )
}

export default Form