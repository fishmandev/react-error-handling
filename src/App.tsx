import './App.css'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { Layout } from './pages/Layout'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader'

const Page1 = lazy(() => import('./pages/Page1'))
const Page2 = lazy(() => import('./pages/Page2'))

let router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: (
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        ),
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
  return <RouterProvider router={router} />
}
