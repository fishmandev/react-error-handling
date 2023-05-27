import { Link } from 'react-router-dom'

export const Navbar: React.FC = (): JSX.Element => (
  <>
    <nav>
      <Link to='/'>Default</Link>
      &nbsp;|&nbsp;
      <Link to='/page1'>Page 1</Link>
      &nbsp;|&nbsp;
      <Link to='/page2'>Page 2</Link>
    </nav>
  </>
)
