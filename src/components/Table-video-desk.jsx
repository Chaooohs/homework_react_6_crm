import { ThVideo, TdVideo } from './Table-cells'


export const TableVideoDesktop = ({ cell }) => {
  return (
    <table className="table">
      <thead>
        <ThVideo />
      </thead>
      <tbody>
        {
          cell &&
          cell.map((el, index) => {
            return (
              <TdVideo el={el} index={index} key={el.id} />
            )
          })
        }
      </tbody>
    </table>
  )
}