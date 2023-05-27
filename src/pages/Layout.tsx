import { Outlet } from 'react-router-dom'
import { Navbar } from './Navbar'

export const Layout: React.FC = (): JSX.Element => (
  <div>
    <Navbar />
    <Outlet />
  </div>
)
