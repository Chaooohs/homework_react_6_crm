import { Input } from "./inputs/inputs";

export const EditInputsVideo = ({ loader }) => {
  return (
    <>
      <div className="form__layout">
        <span className="table__text opacity">id:</span>
        <Input
          name={"id"}
          type={"text"}
          defaultValue={loader.id}
          readOnly
          className="opacity" />
      </div>
      <div className="form__layout">
        <span className="table__text opacity">Категорiя:</span>
        <Input
          name={"category"}
          type={"text"}
          defaultValue={loader.category}
          readOnly
          className="opacity"
        />
      </div>
      <div className="form__layout">
        <span className="table__text">Назва:</span>
        <Input
          name={"name"}
          type={"text"}
          defaultValue={loader.name}
        />
      </div>
      <div className="form__layout">
        <span className="table__text">Посилання:</span>
        <Input
          name={"link"}
          type={"text"}
          defaultValue={loader.link}
        />
      </div>
      <div className="form__layout">
        <span className="table__text opacity">Дата:</span>
        <Input
          name={"created"}
          type={"text"}
          defaultValue={loader.created}
          readOnly
          className="opacity"
        />
      </div>
    </>
  )
}