import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Error () {
  return (
    <div>
      <Header />
      <h1>Erreur 404 : La page que vous cherchez n'existe pas</h1>
      <Link to="/">Retourner à la page d'accueil</Link>
      <Footer />
    </div>
  )
}

export default Error;