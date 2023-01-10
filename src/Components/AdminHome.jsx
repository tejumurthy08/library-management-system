import { Route, Routes } from "react-router-dom";
import AddBooks from "./Addbooks";
import AddUser from "./AddUser";
import AdminDashboard from "./AdminDashboard";
import AdminNavBar from "./AdminNavBar";
import BookList from "./BookList";
import ReadBook from "./ReadBook";
import UserList from "./UserList";

const AdminHome = () => {
    return ( 
        <div className="adminhome">
            <AdminNavBar/>
            <Routes>
                <Route path='/' element={<AdminDashboard/>}/>
                <Route path="/BookList" element={<BookList/>}/>
                <Route path='/UserList' element={<UserList/>}/>
                <Route path='/BookList/:id'element={<ReadBook/>}/>
                <Route path='/AddBooks' element={<AddBooks/>}/>
                <Route path='/AddUser' element={<AddUser/>}/>

            </Routes>

        </div> 
     );
}
 
export default AdminHome;