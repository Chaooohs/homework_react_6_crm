import { useRouteError } from "react-router-dom";
import "./error.css"

export const ErrorPage = () => {
  
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error">
      <div className="error__layout">
        <h1 className="error__title">Oops!</h1>
        <p className="error__subtitle">Sorry, an unexpected error has occurred.</p>
        <p className="error__status">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
