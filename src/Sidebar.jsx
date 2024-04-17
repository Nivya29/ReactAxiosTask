
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><NavLink exact to="/">Home Page</NavLink></li>
                <li><NavLink to="/userslist">Users List</NavLink></li>
                <li><NavLink to="/userform">User Form</NavLink></li>
            </ul>
        </div>
    );
};

export default Sidebar;
