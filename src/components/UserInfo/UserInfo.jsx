import React from 'react'

import bioIcon from '../../assets/img/icons/bio-icon.svg'
import followersIcon from '../../assets/img/icons/followers-icon.svg'
import followingIcon from '../../assets/img/icons/following-icon.svg'
import locationIcon from '../../assets/img/icons/location-icon.svg'
import companyIcon from '../../assets/img/icons/company-icon.svg'
import repositoriesIcon from '../../assets/img/icons/repositories-icon.svg'

import './UserInfo.css'

const UserInfo = ({ data }) => {

  const {
    avatar_url,
    bio,
    company,
    followers,
    following,
    location,
    login,
    name,
    public_repos
  } = data

  return (
    <>
      <div className='user_bio'>
        <img
          className='user_avatar'
          src={avatar_url}
          alt="avatar"
        />
        <h2 className='user_name'>{name}</h2>
        <h4 className='user_nickname'>{login}</h4>
        <div className='user_info'>
          <img
            className='user_info_img'
            src={bioIcon}
            alt="Bio Icon"
          />
          <p className='user_info_text'>{bio || 'N/A'}</p>
        </div>

        <div className='user_info'>
          <img
            className='user_info_img'
            src={companyIcon}
            alt="Company Icon"
          />
          <p className='user_info_text'>{company || 'N/A'}</p>
        </div>

        <div className='user_info'>
          <img
            className='user_info_img'
            src={locationIcon}
            alt="Location Icon"
          />
          <p className='user_info_text'>{location || 'N/A'}</p>
        </div>

        <div className='user_info'>
          <img
            className='user_info_img'
            src={repositoriesIcon}
            alt="Repositories Icon"
          />
          <p className='user_info_text'>{public_repos || 'N/A'}</p>
        </div>

        <div className='user_info'>
          <img
            className='user_info_img'
            src={followingIcon}
            alt="Following Icon"
          />
          <p className='user_info_text'>{following || 'N/A'}</p>
        </div>

        <div className='user_info'>
          <img
            className='user_info_img'
            src={followersIcon}
            alt="Followers Icon"
          />
          <p className='user_info_text'>{followers || 'N/A'}</p>
        </div>
      </div>
    </>
  )
}

export default UserInfo;