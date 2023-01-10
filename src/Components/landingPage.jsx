import {Link} from "react-router-dom";
import "../styles/landingPage.css"
const LandingPage = () => {
    return ( 
        <div className="langingpage">
            <div className="selectlogintype">
                <h1>Library Management System</h1>
                
                <Link to='./adminLogin' className="btn1">Admin Login</Link>
                <Link to='./userLogin' className="btn2">user Login</Link>
            </div>
        </div>
     );
}
 
export default LandingPage;