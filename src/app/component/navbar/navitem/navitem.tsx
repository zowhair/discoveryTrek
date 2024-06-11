
import Link from "next/link";
import '../nav.css'
const NavItem = ({ text, href, active }: any) => {
  return (
    <>
      <a href={href}>
        <span
          className={`nav__item ${
            active ? "active" : ""
          }`}
        >
          {text}
        </span>
      </a>
          
    
    </>
  );
};

export default NavItem;