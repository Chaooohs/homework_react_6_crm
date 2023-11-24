import { Input } from "../components/inputs/inputs";

export const EditInputProducts = ({ loader }) => {
  return (
    <>
      <div className="form__layout opacity">
        <span className="table__text ">id:</span>
        <Input
          name={"id"}
          type={"text"}
          defaultValue={loader.id}
          readOnly
          className="opacity"
        />
      </div>

      <div className="form__layout opacity">
        <span className="table__text">Категорiя:</span>
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
        <span className="table__text">Цiна:</span>
        <Input
          name={"cost"}
          type={"text"}
          defaultValue={loader.cost}
        />
      </div>
      <div className="form__layout">
        <span className="table__text">Залишок:</span>
        <Input
          name={"balance"}
          type={"text"}
          defaultValue={loader.balance}
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
      <div className="form__layout">
        <span className="table__text">Опис:</span>
        <Input
          name={"desctiption"}
          type={"text"}
          defaultValue={loader.desctiption}
        />
      </div>
    </>
  )
}