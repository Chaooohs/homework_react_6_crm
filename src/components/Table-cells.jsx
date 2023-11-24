import { Link } from 'react-router-dom'
import { TableButtons } from "./Table-btns"


export const ThProduct = () => {
  return (
      <tr>
        <th className="table__cell table__text table__th">#:</th>
        <th className="table__cell table__text table__th">Назва:</th>
        <th className="table__cell table__text table__th">Опис:</th>
        <th className="table__cell table__text table__th">Ціна:</th>
        <th className="table__cell table__text table__th">Залишок:</th>
        <th className="table__cell table__text table__th">Статус:</th>
        <th className="table__cell table__text table__th">Дата:</th>
        <th className="table__cell table__text table__th"></th>
      </tr>
  )
}

export const TdProduct = ({ el, index }) => {
  return (
    <tr key={el.id}>
      <td className="table__cell table__text table__td" data-th="#:">{index + 1}</td>
      <td className="table__cell table__text table__td" data-th="Назва:">{el.name}</td>
      <td className="table__cell table__text table__td" data-th="Опис:">{el.desctiption}</td>
      <td className="table__cell table__text table__td" data-th="Ціна:">{el.cost}</td>
      <td className="table__cell table__text table__td" data-th="Залишок:">{el.balance}</td>
      <td className="table__cell table__text table__td" data-th="Статус:">
        {
          el.balance === '0' || el.balance === '' ?
            <span style={{ color: "#F44336" }}>&#10003;</span>
            :
            <span style={{ color: "#51A856" }}>&#10003;</span>
        }
      </td>
      <td className="table__cell table__text table__td" data-th="Дата:">{el.created}</td>
      <td className="table__cell table__text table__td">
        <TableButtons id={el.id} />
      </td>
    </tr>
  )
}


export const ThVideo = () => {
  return (
    <tr>
      <th className="table__cell table__text table__th">#:</th>
      <th className="table__cell table__text table__th">Назва:</th>
      <th className="table__cell table__text table__th">Посилання:</th>
      <th className="table__cell table__text table__th">Дата:</th>
      <th className="table__cell table__text table__th"></th>
    </tr>
  )
}

export const TdVideo = ({ el, index }) => {
  return (
    <tr>
      <td className="table__cell table__text table__td" data-th="#:">{index + 1}</td>
      <td className="table__cell table__text table__td" data-th="Назва:">{el.name}</td>
      <td className="table__cell table__text table__td" data-th="Посилання:">
        <Link className='table__text' target="_blank" to={el.link}>
          {el.link}
        </Link>
      </td>
      <td className="table__cell table__text table__td" data-th="Дата:">{el.created}</td>
      <td className="table__cell table__text table__td">
        <TableButtons id={el.id} />
      </td>
    </tr>
  )
}