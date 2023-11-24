import { Form, useLoaderData } from 'react-router-dom'
import Edit from '../img/edit.svg'
import Delete from '../img/delete.svg'


export const TableButtons = ({ id }) => {
  let loader = useLoaderData()
  loader.map(el => loader = el.category)

  return (
    <div className="table__icon_box">
      <Form action={`/${loader}/${id}/edit`} >
        <button type='submit'>
          <img src={Edit} alt="edit" className="table__icon icon " />
        </button>
      </Form>
      <Form
        action={`/${loader}/${id}/destroy`}
        method='post'
        onSubmit={(e) => {
          if (!confirm("Підтвердьте, що ви хочете видалити цей запис.")) {
            e.preventDefault();
          }
        }}
      >
        <button type="submit">
          <img src={Delete} alt="del" className="table__icon icon " />
        </button>
      </Form>
    </div>
  )
}