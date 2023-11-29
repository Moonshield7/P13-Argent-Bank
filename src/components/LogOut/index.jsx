import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectUser } from "../../utils/features/users";

function LogOut (){
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleLogOut(e) {
    e.preventDefault();

    dispatch(logout());
    navigate('/')
  }

  return (
  <div className="logout-container">
    <Link className="main-nav-item" to="/profile">
      <i className="fa fa-user-circle"></i>
      {user.firstname}
    </Link>
    <a className="main-nav-item" onClick={(e) => handleLogOut(e)}>
      <i className="fa-solid fa-right-from-bracket"></i>
      Log out
    </a>
  </div>
  )
}

export default LogOut;