import { Outlet } from "react-router-dom"
import { SideBar } from "../components/sidebar"

export const Root = () => {
  return (
    <div className="page">
      <SideBar />
      <main className="main">
        <div className="board">
          <Outlet />
        </div>
      </main>
    </div>
  )
}