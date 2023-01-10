import { useState } from "react";
import { useNavigate } from "react-router-dom"
import '../styles/adminLogin.css'

const AdminLogin = () => {
    let [email,setEmail]=useState('')
    let [password,setPassword]=useState('')
    let navigate=useNavigate()
    let login=(e)=>{
        e.preventDefault();
        // let data={email,password}//data input

        // admin valid
        // console.log(data);
        if(email=="admin@gmail.com"&& password ==2000){
            navigate(`/admin/`)
        }else{
            alert(`Invalid ceredentials`)
        }
    }

    return (
        <div className="adminlogin">
            <div className="form">
                <h1>Login as Admin</h1>
                <div className="form_input">
                    <form onSubmit={login}>
                        <div className="email">
                            <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address" />
                        </div>
                        <div className="password">
                            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
                        </div>
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>
        </div>
      );
}
 
export default AdminLogin;