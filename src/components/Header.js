import React from 'react'
import Navigation from './Navigation'

function Header({setPage}) {
  return (
    <div>
      <h1>Welcome to my Portfolio &#128075;</h1>
      <Navigation setPage={setPage}/>
    </div>
  )
}

export default Header;