import React from 'react'

const Search = ({location}) => {
  return (
    <div>
      <p>Search keyword : {new URLSearchParams(location.search).get('keyword')}</p>
      
    </div>
  )
}

export default Search
