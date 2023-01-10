import {  useState } from "react";
import { useNavigate } from "react-router-dom";


const AddUser = () => {
    let [name,setname]=useState("")
    let [age,setage]=useState("")
    let [email,setemail]=useState("")
    let [phonenumber,setphonenumber]=useState("")
    let navigate=useNavigate()

   let handesubmit=(e)=>{
    e.preventDefault();
    //data to be privrnt
    let userData={name,age,email,phonenumber}

    //post to server
    fetch('http://localhost:4001/users',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userData)
    })
    alert(`user added Sucessfully`)
    navigate('admim/AddUser')


   }
    return (
         <div className="adduser">
            <h1>Add User</h1>
            <div className="form">
                <form action="" onSubmit={handesubmit}>
                    <div className="name">
                        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="enter name" />
                    </div>
                    <div className="">
                    <input type="number"value={age} onChange={(e)=>setage(e.target.value)} min='1' placeholder="enter age" />
                    </div>
                    <div className="">
                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="enter email" />
                    </div>
                    <div className="">
                    <input type="tel"value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} minLength='10' maxLength='10' placeholder="enter phone number" />
                    </div>
                    <button>Add User</button>
                </form>
            </div>

    </div> );
}
 
export default AddUser;