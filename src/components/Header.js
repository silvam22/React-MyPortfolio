import React from 'react'
import Navigation from './Navigation'

function Header({setPage}) {
  return (
    <div>
      <h1>Miriam's Portfolio</h1>
      <Navigation setPage={setPage}/>
    </div>
  )
}

export default Header