import { Link } from 'react-router-dom';

import './NavBar.css'

function NavBar(){
    return(
        <nav>
            <Link to='/'><span className='logo'>Movies</span></Link>
            <ul className="menu">
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Categoria'}>Categoria</Link></li>
                <li><Link to={'/Estrenos'}>Estrenos</Link></li>        
            </ul>
            <div>
                <span>search</span>
                <span>log in</span>
            </div>
        </nav>
    )
}

export default NavBar;