import React from 'react';
import logo from "../img/logo.svg";

export default function Header(props) {
  const { isLoggedIn, username, handleLogout } = props;

  const logout = () => {
    // Call the handleLogout function passed as props
    handleLogout();
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} headBg sticky-top`}>
        <div className="container-fluid ">
          <a className="text-warning navbar-brand" href="/">
            <img className='p-2' src={logo} alt={logo} />
            {props.title}
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <a className="nav-link text-white" href='/MedicineCompare'>
                      Medicine Compare
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href='/Drugsearch'>
                      Medicine by Condition
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href='/Identifier'>
                      Pill Identifier
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href='/about'>
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href='/Database'>
                      Contact
                    </a>
                  </li>
                </>
              )}
            </ul>
            {isLoggedIn ? (
              <div className="nav-item">
                <span className="nav-link text-white">Welcome, {username}!</span>
                <button className="btn btn-outline btn-sm text-white" onClick={logout}>
                  Logout
                </button>
              </div>
            ) : (
              <>
                <a className="nav-link" href='/Login'>
                  <button className="btn btn-outline btn-sm  text-white" type="submit">
                    Log in
                  </button>
                </a>
                <a className="nav-link " href='/Signup'>
                  <button className="btn btn-outline btn-sm text-white" type="submit">
                    Sign up
                  </button>
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}