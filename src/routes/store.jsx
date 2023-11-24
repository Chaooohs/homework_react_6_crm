import { useLoaderData } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import { TableProductMobile } from "../components/Table-product-mob";
import { TableProductDesktop } from "../components/Table-product-desk";

export function PageStore() {
  const cell = useLoaderData()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 769 })

  return (
    <>
      <h1 className="board__title">Магазин</h1>
      {
        isMobile &&
        <TableProductMobile cell={cell} />
      }
      {
        isDesktop &&
        <TableProductDesktop cell={cell} />
      }
    </>
  )
}

export async function loader() {
  const cell = localStorage.getItem('store');
  return JSON.parse(cell);
}