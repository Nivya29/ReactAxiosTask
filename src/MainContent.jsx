
import {Route, Routes } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import prop-types library
import UserList from './UserList';
import UserForm from './UserForm';

const MainContent = ({ users, currentUser, setCurrentUser, handleFormSubmit, handleDeleteUser }) => {
    return (
        <div className="main-content">
        <Routes>
        <Route
                    exact
                    path="/"
                    element={
                        <div className="home-page">
                            <h2 style={{color:'green'}}>Welcome to the CRUD Database</h2>
                            <p>
                                This application allows you to perform CRUD operations (Create, Read, Update, Delete)
                                on a list of users. Here’s what you can do:
                            </p>
                            <ul>
                                <li>
                                    Navigate to <strong>Users List</strong> to view all existing users, edit their information, or delete a user.
                                </li>
                                <li>
                                    Navigate to <strong>User Form</strong> to add a new user or edit an existing user.
                                </li>
                            </ul>
                            <p>
                                Use the sidebar to navigate to different sections of the application. Enjoy managing
                                your users!
                            </p>
                        </div>
                    }
                />
                <Route path="/userslist" element={<UserList users={users} onEdit={setCurrentUser} onDelete={handleDeleteUser} />} />
                <Route path="/userform" element={<UserForm currentUser={currentUser} onSubmit={handleFormSubmit} />} />
        </Routes>
    </div>
    );
};

MainContent.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        })
    ).isRequired,
    currentUser: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    setCurrentUser: PropTypes.func.isRequired,
    handleFormSubmit: PropTypes.func.isRequired,
    handleDeleteUser: PropTypes.func.isRequired,
};

export default MainContent;
