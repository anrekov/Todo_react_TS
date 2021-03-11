import { NavLink } from 'react-router-dom';

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className='nav-wrapper purple darken-1 px1'>
      <NavLink to='/' className='brand-logo'>
        React + TypeScript
      </NavLink>
      <ul className='right hide-on-med-and-down'>
        <li>
          <NavLink to='/'>Tasks</NavLink>
        </li>
        <li>
          <NavLink to='/about'>Info</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
