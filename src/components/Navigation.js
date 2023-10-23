import React from 'react';

function Navigation({ setPage }) {
  return (
    <nav>
      <button type="button" onClick={() => setPage('')}>About Me</button>
      <button type="button" onClick={() => setPage('portfolio')}>Portfolio</button>
      <button type="button" onClick={() => setPage('contact')}>Contact</button>
      <button type="button" onClick={() => setPage('resume')}>Resume</button>
    </nav>
  );
}

export default Navigation;



