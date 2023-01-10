import { Link } from "react-router-dom";
import '../styles/AdminNavBar.css'
const AdminNavBar = () => {
    return (
        <div className="adminnavbar">
            <h1>Admin Portal</h1>
            <div className="lists">
                <ul>
                    <li><Link to="/admin/">DashBoard</Link></li>
                    <li><Link to="/admin/AddUser">Add User</Link></li>
                    <li><Link to="/admin/AddBooks">Add Books</Link></li>
                    <li><Link to="/admin/BookList"> Book List</Link></li>
                    <li><Link to='/admin/UserList'>User List</Link></li>
                    <li><Link to="/">Logout</Link></li>
                </ul>
            </div>
        </div>
      );
}
 
export default AdminNavBar;