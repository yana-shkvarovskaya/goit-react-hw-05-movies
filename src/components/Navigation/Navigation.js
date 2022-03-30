import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav className="nav">
    <NavLink
      exact="true"
      to="/"
      //   className={styles.link}
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}
      //   activeClassName="active"
      //   activeclassname={styles.activeLink}
    >
      Home
    </NavLink>

    <NavLink
      to="/movies"
      className={({ isActive }) => (isActive ? 'active' : 'inactive')}
    >
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
