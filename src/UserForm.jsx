import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './UserForm.css'; 

const UserForm = ({ currentUser, onSubmit }) => {
    const [name, setName] = useState(currentUser ? currentUser.name : '');
    const [email, setEmail] = useState(currentUser ? currentUser.email : '');

    useEffect(() => {
        if (currentUser) {
            setName(currentUser.name);
            setEmail(currentUser.email);
        } else {
            setName('');
            setEmail('');
        }
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ id: currentUser ? currentUser.id : null, name, email });
    };

    return (
        <div className="user-form">
            <h2 style={{color:'green'}}>{currentUser ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button className="user-btn" type="submit">{currentUser ? 'Update' : 'Add'}</button>
            </form>
        </div>
    );
};

UserForm.propTypes = {
    currentUser: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        email: PropTypes.string,
    }),
    onSubmit: PropTypes.func.isRequired,
};

export default UserForm;
