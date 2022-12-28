import React, { useState } from 'react'

import client from './services/client'

import UserInfo from './components/UserInfo/UserInfo'

import avatarImg from './assets/img/avatar.jpg'
import loadingAnimation from './assets/img/animations/loading.gif'
import searchIcon from './assets/img/icons/search-icon.svg'

import './App.css'

function App() {

  const [searchValue, setSearchValue] = useState('')
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState(null)

  async function getUserData(event) {
    event.preventDefault()
    try {
      setIsFetching(true)
      setError(null)
      const response = await client.get(`/${searchValue}`)
    } catch (err) {
      setError(err)
    } finally {
      setIsFetching(false)
    }
  }

  const handleUserName = (event) => {
    const value = event.target.value;
    console.log(value)
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
        <div className='user_info'>
          <img
            className='user_avatar'
            src={avatarImg}
            alt="avatar"
          />
          <h2 className='user_name'>Aunio Ribeiro</h2>
          <h4 className='user_nickname'>aunioribeiro</h4>

          <UserInfo
            icon='email'
            text='aunioribeiro'
          />

          <UserInfo
            icon='bio'
            text='aunioribeiro'
          />

          <UserInfo
            icon='organization'
            text='aunioribeiro'
          />

          <UserInfo
            icon='location'
            text='aunioribeiro'
          />

          <UserInfo
            icon='star'
            text='aunioribeiro'
          />

          <UserInfo
            icon='repositories'
            text='aunioribeiro'
          />

          <UserInfo
            icon='followers'
            text='aunioribeiro'
          />

          <UserInfo
            icon='following'
            text='aunioribeiro'
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
