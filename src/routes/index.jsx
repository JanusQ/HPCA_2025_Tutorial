import React from "react"
import { useRoutes, Navigate } from "react-router-dom"

import { JanusRouter } from "./modules/janus"
export const rootRouter = [
  ...JanusRouter,
  // {
  //   path: "*",
  //   element: <Navigate to="/janus" />,
  // },
]
// console.log(rootRouter)
const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}
export default Router
