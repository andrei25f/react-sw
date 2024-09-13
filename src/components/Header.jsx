import React from 'react'
import Navigation from './Navigation'

function Header() {
    return (
        <header className="bg-grey-color rounded-t-3xl">
            <Navigation />
            <h1 className="text-center py-4 text-6xl">Luke Skywalker</h1>
        </header>
    )
}

export default Header