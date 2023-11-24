import { NavLink } from "react-router-dom"
import "./nav-list.css"

export const NavList = ({ isOpen }) => {
  return (
    <div className="list">
      <NavLink className="link" to="store" onClick={() => isOpen(!isOpen)}>
        Магазин
      </NavLink>
      <NavLink className="link" to="restaurant" onClick={() => isOpen(!isOpen)}>
        Ресторан
      </NavLink>
      <NavLink className="link" to="video" onClick={() => isOpen(!isOpen)}>
        Відео хостинг
      </NavLink>
    </div>
  )
}