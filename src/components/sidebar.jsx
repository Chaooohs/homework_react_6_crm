import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from "react-router-dom"
import { useMediaQuery } from 'react-responsive'
import { useClickOutside } from "../hooks"
import { Burger } from "./burger/burger"
import { NavList } from "./nav-list/nav-list"


export const SideBar = () => {
  const isTablet = useMediaQuery({ maxWidth: 992 })
  const isDesktop = useMediaQuery({ minWidth: 993 })
  const [isOpen, setOpen] = useState(false)

  useEffect(() => document.body.classList.toggle('open', isOpen)[isOpen])

  const ref = useRef()
  useClickOutside(ref, () => setOpen(false))

  return (
    <div className="sidebar">
      {
        isTablet &&
        <>
          <Link to="create">
              <button type="submit" className="button" style={{ height: "38px" }}>Додати щось нове</button>
            </Link>
          <nav ref={ref}>
            <Burger onBurger={() => setOpen(!isOpen)} />
            <NavList isOpen={setOpen} />
          </nav>
        </>
      }
      {
        isDesktop &&
        <>
          <NavLink className="link" to="/" >
            Головна
          </NavLink>
            <Link to="create" className="sidebar__btn button">Додати</Link>
          <nav>
            <NavList isOpen={setOpen} />
          </nav >
        </>
      }
    </div>
  )
}