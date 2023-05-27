import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Fallback } from './pages/Fallback'
import { Layout } from './pages/Layout'
import { Page1 } from './pages/Page1'
import { Page2 } from './pages/Page2'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Outlet />,
        children: [
          {
            path: '/page1',
            element: <Page1 />,
          },
          {
            path: '/page2',
            element: <Page2 />,
          },
        ],
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} fallbackElement={<Fallback />} />
}
