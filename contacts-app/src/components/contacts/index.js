import React, { useEffect,useState } from 'react'

import List from './list'
import Form from './form'

function Contacts() {
     const [contacts, setContacts] = useState([])

     useEffect(() => {
          console.log(contacts);
     },[contacts]);

  return (
    <div>
          <h1>Contacts App</h1>
          <List></List>
          <Form addContact={setContacts} contacts={contacts}></Form>
    </div>

  )
}

export default Contacts