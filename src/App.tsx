import { useState } from 'react'
import './App.css'
import { navItems } from './utils/constants';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import { PageContext } from './utils/context';

function App() {
  const [page, setPage] = useState<string>(navItems[0]);
  return (
    <div>
      <PageContext.Provider value={{setPage}}>
        <Header />
      </PageContext.Provider>
      <Main page={page}/>
      <Footer/>
    </div>
  )
}

export default App
