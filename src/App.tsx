import { useState } from 'react'
import './App.css'
import { navItems } from './utils/constants';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import { SWContext } from './utils/context'


function App() {
  const [page, setPage] = useState(navItems[0])

  return (
    <div>
      <SWContext.Provider value={{
        page, changePage: setPage
      }}>
        <Header />
        <Main />
      </SWContext.Provider>
      <Footer />
    </div>

  )
}

export default App
