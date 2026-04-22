import { Link, NavLink } from 'react-router-dom';
import reactLogo from '../assets/react.svg';

function MainLayout() {
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={reactLogo} height="30px" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto my-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Product
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin">
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/customer">
                Customer
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-2">
            <NavLink className="btn btn-primary" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainLayout;
