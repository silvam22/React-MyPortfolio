import React from 'react'

function Navigation({setPage}) {
  return (
    <nav>
      <a href='#' onClick={()=>setPage('')}>About Me</a>
      <a href='#' onClick={()=>setPage('portfolio')}>Portfolio</a>
      <a href='#' onClick={()=>setPage('contact')}>Contact</a>
      <a href='#' onClick={()=>setPage('resume')}>Resume</a>
    </nav>
  )
}

export default Navigation