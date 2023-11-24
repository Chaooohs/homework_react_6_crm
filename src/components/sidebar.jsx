import { useState, useEffect } from 'react'
import { Link, NavLink } from "react-router-dom"
import { useMediaQuery } from 'react-responsive'
import { Burger } from "./burger/burger"
import { NavList } from "./nav-list/nav-list"


export const SideBar = () => {
  const isTablet = useMediaQuery({ maxWidth: 992 })
  const isDesktop = useMediaQuery({ minWidth: 993 })
  const [isOpen, setOpen] = useState(false)

  useEffect(() => document.body.classList.toggle('open', isOpen)[isOpen])

  return (
    <nav>
      <div className="nav">
        {
          isTablet &&
          <>
            <Link to="create">
              <button type="submit" className="button" style={{height: "38px"}}>Додати щось нове</button>
            </Link>
            <Burger onBurger={() => setOpen(!isOpen)}/>
            <NavList isOpen={setOpen}/>
          </>
        }
        {
          isDesktop &&
          <>
            <NavLink className="link" to="/" >
              Головна
            </NavLink>
            <div className="nav__btn_layout">
              <Link to="create" className="nav__btn button">Додати</Link>
            </div>
            <NavList isOpen={setOpen}/>
          </>
        }
      </div>
    </nav>
  )
}