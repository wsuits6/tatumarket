import React from 'react';
import { Link } from 'react-router-dom';

const ProfileSidebar = ({ user, navLinks }) => {
    return (
        <div className="profile-sidebar">
            <div className="profile-avatar">
                <img src={user.avatar} alt={`${user.name} Avatar`} />
                <h3>{user.name}</h3>
                <p>{user.email}</p>
            </div>
            <ul className="profile-nav">
                {navLinks.map((link, index) => (
                    <li key={index}>
                        <Link to={link.to} className={link.active ? 'active' : ''}>
                            <i className={link.icon}></i> {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProfileSidebar;
