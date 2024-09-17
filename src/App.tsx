import './App.css'
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import { useState } from 'react';
import { defaultHero } from './utils/constants';
import { SWContext } from './utils/context';


function App() {
  const [hero, setHero] = useState(defaultHero);

  return (
    <div>
      <SWContext.Provider value={{
        hero, changeHero: setHero
      }}>
        <Header />
        <Main />
        <Footer />
      </SWContext.Provider>
    </div>

  )
}

export default App
