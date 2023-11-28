import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Error () {
  return (
    <div>
      <Header />
      <div className="error-page">
        <h1>Erreur 404 : La page que vous cherchez n'existe pas</h1>
        <Link to="/" className="redirect-link">Retourner à la page d'accueil</Link>
      </div>
      <Footer />
    </div>
  )
}

export default Error;