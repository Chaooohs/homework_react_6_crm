import "./burger.css"

export const Burger = ({ onBurger }) => {
  return (
    <div className="burger" onClick={onBurger}>
      <span className="burger__line burger__line_one"></span>
      <span className="burger__line burger__line_two"></span>
      <span className="burger__line burger__line_three"></span>
      <span className="burger__line burger__line_four"></span>
    </div>
  )
}