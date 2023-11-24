import { TdProduct, ThProduct } from './Table-cells'


export const TableProductMobile = ({ cell }) => {
  return (
    <>
      {
        cell &&
        cell.map((el, index) => {
          return (
            <table className="table" key={el.id}>
              <thead>
                <ThProduct />
              </thead>
              <tbody>
                <TdProduct el={el} index={index} key={el.id} />
              </tbody>
            </table>
          )
        })
      }
    </>
  )
}