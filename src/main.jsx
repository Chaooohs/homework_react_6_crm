import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, } from "react-router-dom"
import './index.css'


import { Root } from "./routes/root"
import { Index } from "./routes/index"
import { ErrorPage } from "./routes/error/error"
import { PageRestaurant, loader as restaurantLoader } from "./routes/restaurant"
import { PageVideo, loader as videoLoader } from "./routes/video"
import { PageStore, loader as storeLoader } from "./routes/store"
import { CreatePage, action as createAction, } from "./routes/create"
import { EditPage, loader as editLoader, action as editAction } from './routes/edit'
import { action as destroyAction } from "./routes/destroy"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}  >
      <Route errorElement={<ErrorPage />} >
        <Route index element={<Index />} />
        <Route path="restaurant" loader={restaurantLoader} element={<PageRestaurant />} />
        <Route path="store" loader={storeLoader} element={<PageStore />} />
        <Route path="video" loader={videoLoader} element={<PageVideo />} />
        <Route path="create" action={createAction} element={<CreatePage />} />
        <Route path=":category/:id/edit/" loader={editLoader} action={editAction} element={<EditPage />} />
        <Route path=":category/:id/destroy" action={destroyAction} element={<EditPage />} />
      </Route>
    </Route>
  )
);


ReactDOM.createRoot(document.querySelector(".one")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)