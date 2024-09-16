import { Link } from "react-router-dom"
import { Item } from "../utils/types"

interface NavItemProps {
  item: Item
}

const NavItem = ({ item }: NavItemProps) => {
  return (
    <Link className="bg-red-color border-black border-2 rounded-md cursor-pointer hover:text-white hover:bg-red-500 px-3 py-2" to={item.path}>{item.title}</Link>
  )
}

export default NavItem