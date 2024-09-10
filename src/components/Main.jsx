import React, { useState } from 'react'
import Home from './Home'
import { navItems } from '../utils/constants'
import AboutMe from './AboutMe';
import StarWars from './StarWars';
import Contact from './Contact';

function Main({page}) {
    switch (page) {
        case navItems[1]:
            return <AboutMe />
        case navItems[2]:
            return <StarWars />
        case navItems[3]:
            return <Contact />
        default:
            return <Home/>
    }
}

export default Main