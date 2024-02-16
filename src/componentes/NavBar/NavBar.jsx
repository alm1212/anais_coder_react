import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Academia</a>
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
                        <li><a className="dropdown-item" href="#">Programación Frontend</a></li>
                        <li><a className="dropdown-item" href="#">Programación Backend</a></li>
                        <li><a className="dropdown-item" href="#">Diseño UX/UI</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Inglés</a></li>
                        <li><a className="dropdown-item" href="#">Italiano</a></li>
                        <li><a className="dropdown-item" href="#">Portugués</a></li>
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