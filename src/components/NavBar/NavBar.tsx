import './NavBar.css';
import {NavLink} from 'react-router-dom';
import { ROUTE_PATHS } from '../../App';

const NavBar = () => {
    const destinations = {
        'resume': ROUTE_PATHS.RESUME, 
        'portfolio': ROUTE_PATHS.PORTFOLIO,
        'bloggish': ROUTE_PATHS.BLOGGISH, 
        'contact': ROUTE_PATHS.CONTACT
    };

    return (
        <nav className='navbar'>
            <ul className='nav'>
                {Object.entries(destinations).map(([name, path]) => (
                    <NavLink key={name} to={path}>{name}</NavLink>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;