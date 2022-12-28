import React, { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

import client from './services/client'

import UserInfo from './components/UserInfo/UserInfo'
import loadingAnimation from './assets/img/animations/loading.json'
import userNotFound from './assets/img/animations/404-not-found.json'
import searchIcon from './assets/img/icons/search-icon.svg'

import './App.css'
import UserRepos from './components/UserRepos/UserRepos';

function App() {

  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [userInfos, setUserInfos] = useState(null)
  const [userRepos, setUserRepos] = useState(null)

  async function getUserInfos(event) {
    event.preventDefault()
    try {
      setIsFetching(true)
      setError(null)
      const response = await client.get(`/${searchValue}`)
      setUserInfos(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setIsFetching(false)
    }
  }

  async function getUserRepos(event) {
    event.preventDefault()
    try {
      setIsFetching(true)
      setError(null)
      const response = await client.get(`/${searchValue}/repos`)
      setUserRepos(response.data)
    } catch (err) {
      setError(err)
    } finally {
      setIsFetching(false)
    }
  }

  console.log(userRepos)

  const handleUserName = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  }

  return (
    <>
      {isFetching && (
        <div className="loading">
          <Player
            src={loadingAnimation}
            speed="1"
            loop
            controls
            autoplay
          />
        </div>
      )}

      <div className={`search_container ${userInfos || error ? 'search_container-fetched' : ''}`}>
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
              onClick={(event) => {
                getUserInfos(event);
                getUserRepos(event);
              }}
            >
              <img
                src={searchIcon}
                alt="search"
              />
            </button>
          </form>
        </div>
      </div>

      {userInfos && !isFetching && !error && (
        <div className="user_container">
          <div className='user_bio'>
            <img
              className='user_avatar'
              src={userInfos.avatar_url}
              alt="avatar"
            />
            <h2 className='user_name'>{userInfos.name}</h2>
            <h4 className='user_nickname'>{userInfos.login}</h4>
            <UserInfo
              data={userInfos}
            />
          </div>
          <UserRepos
            data={userRepos} />
        </div>
      )}

      {!isFetching && error && (
        <div className='user_container-not_found'>
          <Player
            src={userNotFound}
            speed="1"
            loop
            controls
            autoplay
          />
        </div>
      )}
    </>
  )
}

export default App
