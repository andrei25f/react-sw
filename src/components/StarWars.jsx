import React from 'react'
import { starWarsInfo } from '../utils/constants'

const StarWars = () => {
  return (
    <div className="text-2xl leading-loose text-justify tracking-widest">{starWarsInfo}</div>
  )
}

export default StarWars