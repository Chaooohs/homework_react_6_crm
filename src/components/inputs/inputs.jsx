import "./inputs.css"

export const Input = ({ name, type, placeholder, defaultValue, readOnly, className }) => {
  return (
    <div className="layout">
      <input
        name={name}
        type={type}
        className={`input ${className}`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        readOnly={readOnly}
      />
    </div>
  )
}

export const Select = ({ name, onChange }) => {
  return (
    <div className="select_layout">
      <select
        name={name}
        onChange={onChange}
        className="select input"
      >
        <option value hidden>Оберіть категорію</option>
        <option className="option" value="store">категорія Магазин</option>
        <option className="option" value="restaurant">категорія Ресторан</option>
        <option className="option" value="video">категорія Відео хостинг</option>
      </select>
    </div>
  )
}

export const Textarea = ({ name, type, placeholder }) => {
  return (
    <div className="layout">
      <textarea
        name={name}
        className="input textarea"
        placeholder={placeholder}
      />
    </div>
  )
}