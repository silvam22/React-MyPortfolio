import { useState } from 'react'
import './App.css';
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState('')
  const renderPage = () => {
    if (page === 'portfolio') {
      return <Portfolio />
    } else if (page === 'contact') {
      return <Contact />
    } else if (page === 'resume') {
      return <Resume />
    } else {
      return <About />
    }
  }
  return (
    <div className="App">
      <Header setPage={setPage}/>
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
