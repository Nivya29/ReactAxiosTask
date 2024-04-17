import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './UserList.css'; 

const UserList = ({ users, onEdit, onDelete }) => {
    const navigate = useNavigate();

    const handleEdit = (user) => {
        onEdit(user); 
        navigate('/userform'); 
    };

    return (
        <div className="user-list-container">
            <h2 style={{color:'green'}}>User List</h2>
            <div className="user-list">
                {users.map((user) => (
                    <div className="user-item" key={user.id}>
                        <div className="user-details">
                            <span className="user-name">{user.name}</span>
                            <span className="user-email">{user.email}</span>
                        </div>
                        <div className="user-actions">
                            <button className="edit-button" onClick={() => handleEdit(user)}>Edit</button>
                            <button className="delete-button" onClick={() => onDelete(user.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
        })
    ).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default UserList;
