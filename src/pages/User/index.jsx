import { useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserContainer from "../../components/UserContainer";
import { selectUser } from "../../utils/features/users";
import { Link } from "react-router-dom";

function User () {
  const user = useSelector(selectUser);

  if(user !== null){
    return (
    <div>
      <Header />
      <UserContainer />
      <Footer />
    </div>
    )
  }
  return(
    <div>
      <Header />
      <div className="error-page">
        <h1>Vous devez être connecté pour accéder à votre compte</h1>
        <Link to="/login" className="redirect-link">Retour à la page de connexion</Link>
      </div>
      <Footer />
    </div>
  )
  
  
  
}

export default User;