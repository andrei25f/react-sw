import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { navItems } from './utils/constants'
import { PageContext } from './utils/context'

function App() { 
  const [page, setPage] = useState(navItems[0]);
  return (
    <div className="container-fluid">
      <PageContext.Provider value={{setPage}}>
        <Header />
      </PageContext.Provider>
      <Main page={page}/>
      <Footer/>
    </div>
  )
}

export default App
