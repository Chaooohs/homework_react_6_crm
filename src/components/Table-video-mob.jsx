import { ThVideo, TdVideo } from './Table-cells'


export const TableVideoMobile = ({ cell }) => {
  return (
    <>
      {
        cell &&
        cell.map((el, index) => {
          return (
            <table className="table" key={el.id}>
              <thead>
                <ThVideo />
              </thead>
              <tbody>
                <TdVideo el={el} index={index} />
              </tbody>
            </table>
          )
        })
      }
    </>
  )
}