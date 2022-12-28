import React, { useState } from 'react'

import client from './services/client'

import UserInfo from './components/UserInfo/UserInfo'

import avatarImg from './assets/img/avatar.jpg'
import loadingAnimation from './assets/img/animations/loading.gif'
import searchIcon from './assets/img/icons/search-icon.svg'

import './App.css'

function App() {

  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [userData, setUserData] = useState({})
  const [searchValue, setSearchValue] = useState('')

  async function getUserData(event) {
    event.preventDefault()
    try {
      setIsFetching(true)
      setError(null)
      const response = await client.get(`/${searchValue}`)
      setUserData(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setIsFetching(false)
    }
  }

  const handleUserName = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  }

  return (
    <>
      {isFetching && (
        <div className="loading">
          <img
            src={loadingAnimation}
            alt="loading"
          />
        </div>
      )}
      <div className="search_container">
        <div className='search'>
          <h1 className='search_title'>
            <span className='search_title_github'>Github</span>
            <span className='search_title_search'>Search</span>
          </h1>
          <form
            className='search_form'
          >
            <input
              id="name"
              className='search_input'
              type="text"
              value={searchValue}
              onChange={handleUserName}
            />
            <button
              className='search_button'
              disabled={searchValue === ''}
              onClick={getUserData}
            >
              <img
                src={searchIcon}
                alt="search"
              />
            </button>
          </form>
        </div>
      </div>
      <div className="user_container">
        <div className='user_bio'>
          <img
            className='user_avatar'
            src={avatarImg}
            alt="avatar"
          />
          <h2 className='user_name'>{userData.name}</h2>
          <h4 className='user_nickname'>{userData.login}</h4>

          <UserInfo
            data={userData}
          />

        </div>
        <div className='user_repos'>
          b
        </div>
      </div>
    </>
  )
}

export default App
