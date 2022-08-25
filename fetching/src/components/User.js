import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function User() {
     const [users, setUsers] = useState([])
     const [loading, setLoading] = useState(true)
     useEffect(() => {
          axios('https://jsonplaceholder.typicode.com/users')
               .then(res => setUsers(res.data))
               .catch(err => console.log(err))
               .finally(() => setLoading(false))
     }, [])

     if (loading) {
          return <div>Loading...</div>
     }

  return (
    <div>
          <h1>Users</h1>
          {users.map(((user) => 
               <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
               </div>
               ))}
          
    </div>
  );
}
