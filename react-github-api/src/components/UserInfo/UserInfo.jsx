import React from 'react'
import './UserInfo.css'

import bioIcon from '../../assets/img/icons/bio-icon.svg'
import emailIcon from '../../assets/img/icons/email-icon.svg'
import followersIcon from '../../assets/img/icons/followers-icon.svg'
import followingIcon from '../../assets/img/icons/following-icon.svg'
import locationIcon from '../../assets/img/icons/location-icon.svg'
import organizationIcon from '../../assets/img/icons/organization-icon.svg'
import repositoriesIcon from '../../assets/img/icons/repositories-icon.svg'
import starIcon from '../../assets/img/icons/star-icon.svg'

function generateIcon(icon) {
  const icons = {
    bio: bioIcon,
    email: emailIcon,
    followers: followersIcon,
    following: followingIcon,
    location: locationIcon,
    organization: organizationIcon,
    repositories: repositoriesIcon,
    star: starIcon
  };

  return icons[icon]
}

const UserInfo = ({ icon, text }) => {
  return (
    <div className='user_bio'>
      <img
        className='user_bio_img'
        src={generateIcon(icon)}
        alt="Email Icon"
      />
      <p className='user_bio_text'>{text}</p>
    </div>
  )
}

export default UserInfo;