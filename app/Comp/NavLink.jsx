import {Link} from 'react-scroll';


const NavLink = ({href, title,onClick})=>{
    
    return(
        <Link to={href} 
        activeClass="active"  
        spy={true} 
        smooth={true} 
        offset={-75} 
        duration={500} 
        onClick={onClick}
        className="block py-2 pl-3 pr-4 text-blue-300 rounded md:p-0 hover:text-white">
            {title}
        </Link>
    );
};
export default NavLink;