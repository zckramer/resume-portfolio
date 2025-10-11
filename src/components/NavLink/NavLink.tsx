type NavLinkProps = {
    dest: string;
    keyIndex?: string;
};

const NavLink: React.FC<NavLinkProps> = ({ dest, keyIndex }) => (
    <a href={`#${dest}`} key={`nav-link-${dest}-${keyIndex}`}>{dest}</a>
);

export default NavLink;