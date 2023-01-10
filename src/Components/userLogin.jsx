import { useNavigate } from "react-router-dom";

const UserLogin = () => {
    let navigate=useNavigate()
    let Login=()=>{
        navigate(`./user`)
    }
    return ( 
        <div className="userlogin">
            <div className="form">
                <h1>Login As User</h1>
                <div className="form_input">
                    <form onSubmit={Login}>
                        <div className="email">
                            <input type="email" required placeholder="email address" />
                        </div>
                        <div className="password">
                            <input type="password" required placeholder="password" />
                        </div>
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>

        </div>
     );
}
 
export default UserLogin;