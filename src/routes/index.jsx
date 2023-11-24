import { Link } from "react-router-dom";

export const Index = () => {
  return (
    <div className="box__index">
      <Link to="create">
        <p>
          <button type="submit" className="button">Додати щось нове</button>
        </p>
      </Link>
    </div>
  );
}