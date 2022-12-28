import React, { useState } from 'react'

import client from './services/client'

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
      <div className="result_container">
      </div>
    </>
  )
}

export default App
