import {Link} from "react-router-dom";

const NavLink = ({ children, href, ...props }) => (
    <Link to={href} {...props} className={`py-2.5 px-4 text-center rounded-full duration-150 ${props?.className || ""}`}>
        {children}
    </Link>
)

export default NavLink