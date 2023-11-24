import { useLoaderData } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

import { TableVideoMobile } from "../components/Table-video-mob";
import { TableVideoDesktop } from "../components/Table-video-desk";


export const PageVideo = () => {
  const cell = useLoaderData()
  const isMobile = useMediaQuery({ maxWidth: 768 })
  const isDesktop = useMediaQuery({ minWidth: 769 })

return (
    <>
      <h1 className="board__title">Магазин</h1>
      {
        isMobile &&
        <TableVideoMobile cell={cell} />
      }
      {
        isDesktop &&
        <TableVideoDesktop cell={cell} />
      }
    </>
  )
}


export async function loader() {
  const cell = localStorage.getItem('video');
  return JSON.parse(cell);
}