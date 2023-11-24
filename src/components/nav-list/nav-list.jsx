import { NavLink } from "react-router-dom"
import { useMediaQuery } from 'react-responsive'
import "./nav-list.css"


export const NavList = ({ isOpen }) => {
  const isTablet = useMediaQuery({ maxWidth: 992 })
  const isDesktop = useMediaQuery({ minWidth: 993 })

  return (
    <>
      {
        isTablet &&
        <div className="list">
          <NavLink className="link" to="/" onClick={() => isOpen(!isOpen)}>
            Головна
          </NavLink>
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
      }
      {
        isDesktop &&
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
      }
    </>
  )
}