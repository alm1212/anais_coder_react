import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={"/"} style={{fontWeight: "bold", marginLeft:"8px"}}>Academia</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">                    
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Cursos Online
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to={"/category/Frontend"} style={{fontWeight: "bold", marginLeft:"8px"}}>Frontend</Link>
                        {/* <li><a className="dropdown-item" href="#">React</a></li> */}
                        <li style={{marginLeft:"12px"}}>React</li>
                        <li style={{marginLeft:"12px"}}>JavaScript</li>
                        <li style={{marginLeft:"12px"}}>Css</li>
                        <li style={{marginLeft:"12px"}}>Html</li>
                        <Link to={"/category/Backend"} style={{fontWeight: "bold", marginLeft:"8px"}}> Backend</Link>
                        <li style={{marginLeft:"12px"}}>Java</li>
                        <li style={{marginLeft:"12px"}}>NodeJs</li>
                        <li style={{marginLeft:"12px"}}>C#</li>
                    </ul>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Buscar curso" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>                
                </div>                
            </div>            
            <a className="navbar-brand" href="#"><CartWidget/></a>
            <a className="navbar-brand" href="#">Mi Cuenta</a>           
        </nav>
    )
}

export default NavBar;