import { Form, useLoaderData, redirect, useNavigate, } from "react-router-dom";
import { editLocalStorage } from "..";
import { EditInputProducts } from "../components/EditInputsProducts";
import { EditInputsVideo } from "../components/EditInputsVideo";


export const EditPage = () => {
  const navigate = useNavigate()
  let loader = useLoaderData()
  if (loader) loader.map(el => loader = el)

  return (
    <Form method="post">
      <div className="form__content board__form">
        {
          loader.category === 'restaurant' || loader.category === 'store' ?
            <EditInputProducts loader={loader} />
            :
            <EditInputsVideo loader={loader} />
        }
        {/* <p className="box__btn"> */}
          <button className="button" type="submit">Зберегти</button>
          <button className="button" type="button" onClick={() => navigate(-1)}>Вiдмiна</button>
        {/* </p> */}
      </div>
    </Form>
  );
}


export async function loader({ params }) {
  const cell = JSON.parse(localStorage.getItem(params.category))
  let editArray = []

  if (Array.isArray(cell)) {
    editArray = cell.filter((el) => {
      if (el.id === params.id) return el
    })
  }

  return editArray
}


export async function action({ request, params }) {
  const formData = await request.formData()
  // const obj = Object.fromEntries(formData)

  const product =
  {
    id: formData.get('id'),
    category: formData.get('category'),
    name: formData.get('name'),
    cost: formData.get('cost'),
    balance: formData.get('balance'),
    created: new Date().toLocaleDateString(),
    desctiption: formData.get('desctiption'),
    link: formData.get('link'),
  }

  editLocalStorage(product, params)

  return redirect(`/${params.category}`)
}