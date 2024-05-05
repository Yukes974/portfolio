import { Link } from "react-router-dom";
import "../css/error.css";

function Error() {
  return (
    <div className="errorBox">
      <h1 className="errorH1">404</h1>
      <h2 className="errorH2">Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="linkError404">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default Error;
