import { useState } from "react"
import { Form, redirect, useNavigate, } from "react-router-dom"
import { createLocalStorage } from ".."
import { Select, Input, Textarea, } from "../components/inputs/inputs"


export const CreatePage = () => {
  const navigate = useNavigate()
  const [isCategory, setCategory] = useState()

  const handleSelect = (e) => {
    const select = e.target.value
    setCategory(select)
  }

  return (
    <Form method="post">
      <div className="form__content board__form">
        <h1 className="board__title">Додайте продукт</h1>

        <Select name={"select"} onChange={handleSelect}/>
        {
          isCategory === 'restaurant' || isCategory === 'store' ?
            <>
              <Input name={"name"} type={"text"} placeholder={"Введiть назву продукту"} />
              <Input name={"cost"} type={"text"} placeholder={"Введiть цiну"} />
              <Input name={"balance"} type={"text"} placeholder={"Введiть кiлькiсть"} />
              <Textarea name={"desctiption"} type={"text"} placeholder={"Опис"} />
            </>
            : null
        }
        {
          isCategory === 'video' &&
          <>
            <Input name={"name"} type={"text"} placeholder={"Введiть назву вiдео"} />
            <Input name={"link"} type={"text"} placeholder={"Посилання на вiдео"} />
          </>
        }
        <button type="submit" className="button">Зберегти</button>
        <button className="button" type="button" onClick={() => navigate(-1)}>Вiдмiна</button>
      </div>
    </Form>
  )
}

export async function action({ request }) {
  const formData = await request.formData();
  const category = formData.get('select')

  const product =
  {
    id: new Date().getDate() + "-" + Math.floor(Math.random() * 200).toString(),
    category: formData.get('select'),
    name: formData.get('name'),
    cost: formData.get('cost'),
    balance: formData.get('balance'),
    created: new Date().toLocaleDateString(),
    desctiption: formData.get('desctiption'),
    link: formData.get('link'),
  }

  createLocalStorage(product, category)

  return redirect(`/${category}`)
}