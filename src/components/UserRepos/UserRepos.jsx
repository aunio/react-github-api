import React from 'react'

import starIcon from '../../assets/img/icons/star-icon.svg'

import './UserRepos.css'

const UserRepos = (data) => {

  const REPOSITORIES_LIST = data.data
  console.log('Lista de REPOS', REPOSITORIES_LIST)

  return (
    <div className='user_repos'>
      {REPOSITORIES_LIST.map((repository) => (
        <div className='user_repo'>
          <span className='repo_title'>{repository.name}</span>
          <span className='repo_description'>{repository.description || 'No Description'}</span>
          <div className='repo_stars'>
            <img className='repo_stars_icon' src={starIcon} alt="Star" />
            <span className='repo_stars_quantity'>{repository.stargazers_count}</span>
          </div>
        </div>
      ))}
    </div>
  )

}

export default UserRepos