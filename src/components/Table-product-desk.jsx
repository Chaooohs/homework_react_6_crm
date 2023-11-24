import { ThProduct, TdProduct } from './Table-cells'


export const TableProductDesktop = ({ cell }) => {
  return (
    <table className="table">
      <thead>
        <ThProduct />
      </thead>
      <tbody>
        {
          cell &&
          cell.map((el, index) => {
            return (
              <TdProduct el={el} index={index} key={el.id} />
            )
          })
        }
      </tbody>
    </table>
  )
}