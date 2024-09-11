import React, { useContext } from 'react'
import { PageContext } from '../utils/context'

const NavItem = ({itemTitle}) => {
  const {setPage} = useContext(PageContext)
  return (
    <li onClick={() => setPage(itemTitle)} className="nav-item btn btn-danger mx-1">{itemTitle}</li>
  )
}

export default NavItem