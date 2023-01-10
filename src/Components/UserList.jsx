import { useEffect, useState } from "react";

const UserList = () => {
    let [user,setuser]=useState([])
    
    let remove=(id,age)=>{
        setuser(user.filter(x=>x.id!=id))
        alert(`${id}has been removed`)
    }

    useEffect(()=>{
        let fetchdata= async()=>{
            let response=await fetch('http://localhost:4001/users')
            let data= await response.json();
            setuser(data)
        }
        fetchdata()
    },[])

    return ( 
        <div className="userlist">
            <h1>User List</h1>
         <div className="">
         {user.map(u=>(
            <div className="">
                <div className="user">
                <h1>Name:{u.name}</h1>
                <h3>age:{u.age}</h3>
                <h3>phone:{u.phonenumber}</h3>
                <button onClick={()=>remove(u.id,u.age)}>remove</button>
            
            </div>
            </div>

            ))}
         </div>
            
            
        </div>
     );
}
 
export default UserList;