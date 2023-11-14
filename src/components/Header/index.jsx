import { Link } from "react-router-dom";

function Header () {
  return (
    <nav className="main-nav">
    <Link className="main-nav-logo" to='/'>
      <img
        className="main-nav-logo-image"
        src="src\assets\img\argentBankLogo.png"
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
    <div>
      <a className="main-nav-item" href="./sign-in.html">
        <i className="fa fa-user-circle"></i>
        Sign In
      </a>
    </div>
  </nav>
  )
}

export default Header;