import React, { useEffect,useState } from 'react'

import List from './list'
import Form from './form'
import './styles.css'

function Contacts() {
     const [contacts, setContacts] = useState([
      {
        "fullname": "Berk Karatas",
        "phone_number": 555555
      },
      {
        "fullname": "Berque Petit",
        "phone_number": 545555
      },
      {
        "fullname": "Mert Yiğit",
        "phone_number": 535555
      },

     ])
     useEffect(() => {
          console.log(contacts);
     },[contacts]);

  return (
    <div id="container">
          <h1 className='text-center'>Contacts App</h1>
          <List contacts={contacts} ></List>
          <Form addContact={setContacts} contacts={contacts}></Form>
    </div>

  )
}

export default Contacts