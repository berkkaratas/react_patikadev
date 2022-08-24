import React from 'react'
import { useState } from 'react';

function List({contacts}) {
  const [filterText, setFilterText] = useState('');

  const filtered = contacts.filter((item)=>{
    return Object.keys(item).some((key)=>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  if(contacts.length === 0){
    return (
      <div className='text-center'>
        <p>No contacts yet. Add contact</p>
      </div>
    )
  }
  if(filtered.length === 0){
    return(
      <div className='text-center'>
        <input placeholder='Filter contact' value={filterText} onChange={(e)=> setFilterText(e.target.value)} ></input>
        <p>No Result</p>
      </div>
    );  
  }



  return (
    <div >
      <input placeholder='Filter contact' value={filterText} onChange={(e)=> setFilterText(e.target.value)} ></input>
      <table>
        <thead>
         <tr>
           <th>Name</th>
           <th>Number</th>
         </tr>
        </thead>
        <tbody>
          {filtered.map((contact,index) => {
            return (
              <tr key={index}>
                <td>{contact.fullname}</td>
                <td>{contact.phone_number}</td>
              </tr>
            ) 
          } )}
        </tbody>
      </table>
    </div>
  )
}

export default List

/*
{
        contacts.map((contact,index) => {
          return (
            <div key={index}>
              <p>Name: {contact.fullname} | Number: {contact.phone_number}</p>
            </div>
          )
        }
        )}

*/