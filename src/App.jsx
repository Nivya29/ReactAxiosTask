import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css'

const App = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Fetch user data from the API
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    // Handle form submission (add/edit user)
    const handleFormSubmit = async (user) => {
        try {
            if (user.id) {
                // Update an existing user
                const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
                setUsers(users.map(u => u.id === user.id ? response.data : u));
                setCurrentUser(null);
            } else {
                // Add a new user
                const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
                setUsers([...users, response.data]);
                setCurrentUser(null);
            }
        } catch (error) {
            console.error('Error submitting user:', error);
        }
    };

    // Handle deleting a user
    const handleDeleteUser = async (userId) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <Router>
            <div className="app">
                <Navbar />
                <div className="app-container">
                    <Sidebar />
                    <MainContent
                        users={users}
                        currentUser={currentUser}
                        setCurrentUser={setCurrentUser}
                        handleFormSubmit={handleFormSubmit}
                        handleDeleteUser={handleDeleteUser}
                    />
                </div>
            </div>
        </Router>
    );
};

export default App;
