import { redirect } from "react-router-dom";
import { destroyLocalStorage } from "..";


export async function action({ params }) {
  
  destroyLocalStorage(params)

  return redirect(`/${params.category}`);
}