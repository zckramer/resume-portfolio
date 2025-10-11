import NavLink from "../NavLink/NavLink";

const NavBar = () => {
    const destinations = ['resume', 'portfolio', 'contact'];

    return (
        <nav>
            {destinations.map((dest: string, index: number) => (
                <NavLink dest={dest} keyIndex={index.toString()}/>
            ))}
        </nav>
    );
};

export default NavBar;