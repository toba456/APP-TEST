
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
           <Link to={"/"}>
                <h5 class="nav-item nav-link active" href="#">Table <span class="sr-only">(current)</span></h5>
            </Link> 
            <Link to={"/Form"}>
                <h5 class="nav-item nav-link" href="#">Form</h5>
            </Link>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;