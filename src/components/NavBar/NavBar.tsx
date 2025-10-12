import './NavBar.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    const destinations = {
        'resume': '/resume', 
        'portfolio': '/portfolio',
        'bloggish': '/bloggish', 
        'contact': '/contact'
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