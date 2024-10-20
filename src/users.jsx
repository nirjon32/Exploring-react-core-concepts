import { useEffect, useState } from "react";
import User from "./user";
export default function Users(){
  
    const [users,setUsers]= useState([]);
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))

    },[]);

    return (
        <>
         <div className="person">
           <h1>users: {users.length}</h1>
           {
              
              users.map(user=> <User user={user}></User>)

  
           }

         </div>
        
        </>


    )
}