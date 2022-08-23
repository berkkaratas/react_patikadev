import React from 'react'
import './index.css'

function List({contacts}) {

  if(contacts.length === 0){
    return (
      <div>
        <p>No contacts yet. Add contact</p>
      </div>
    )
  }


  return (
    <div >
      <table>
        <thead>
          <th>Name</th>
          <th>Number</th>
        </thead>
        <tbody>
          {contacts.map((contact,index) => {
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