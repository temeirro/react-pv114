import { Link } from "react-router-dom";
export default function Menu() {
    return (
        <>
        <h2>Menu</h2>
        <nav>
            <a> <Link to={'/'}>Home</Link></a>
            <a><Link to={'/about'}>About</Link></a>
            <a><Link to={'/privacy'}>Privacy</Link></a>
        </nav>
        </>
    );
}