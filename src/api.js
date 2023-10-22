import { useEffect, useState } from "react"

export function GetData(){
    const url = "https://jsonplaceholder.typicode.com/users";
    const[users,setUsers] = useState([]);

    async function getUsers(){
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    }
    useEffect(()=>{
        getUsers();
    },[])
    return(
        users.map((user)=>{ 
            return(
                <div key={user.id} className="col-6 card bg-white m-4">
                    <div className="card-title">
                        <h5>{user.name}</h5>
                        <h6>{user.username}</h6>
                    </div>
                    <div className="card-body">
                        <p>{user.email}</p>
                        <p>{user.address.street}</p>
                        <p>{user.phone}</p>
                        <p>{user.website}</p>
                    </div>
               </div>
            )                               
        })      
    )
}