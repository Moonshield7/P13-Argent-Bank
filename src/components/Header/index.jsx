import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../utils/features/users';
import LogOut from '../LogOut';
import LogIn from '../LogIn';

function Header () {
  const user = useSelector(selectUser);
  
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
    {user ? <LogOut /> : <LogIn /> }
  </nav>
  );
}

export default Header;