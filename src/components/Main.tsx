import { useContext } from 'react'
import Home from './Home'
import { navItems } from '../utils/constants'
import AboutMe from './AboutMe';
import Contact from './Contact';
import StarWars from './StarWars';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';


const Main = () => {
  
  return (
    <Routes>
      {['/', navItems[0].path, `${navItems[0].path}/:heroId`].map(path => <Route key={path} path={path} element={<Home/>}/>)}
      {[navItems[1].path, `${navItems[1].path}/:heroId`].map(path => <Route key={path} path={path} element={<AboutMe/>}/>)}
      {[navItems[2].path, `${navItems[2].path}/:heroId`].map(path => <Route key={path} path={path} element={<StarWars/>}/>)}
      {[navItems[3].path, `${navItems[3].path}/:heroId`].map(path => <Route key={path} path={path} element={<Contact/>}/>)}
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )

  /*switch (page) {
    case navItems[1]:
      return <AboutMe />
    case navItems[2]:
      return <StarWars />
    case navItems[3]:
      return <Contact />
    default:
      return <Home />
  }*/
}

export default Main