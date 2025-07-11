import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, role, image, description }) => {
  return (
    <div className="profile-card">
      <img src={image} alt={`${name}'s profile`} className="profile-img" />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ProfileCard;
