import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
  return (
    <Link to={href} className="text-md uppercase">
      {title}
    </Link>
  );
};
export default NavLink;
