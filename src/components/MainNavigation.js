import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink //We Add Navlink instead of Link, because it can accept a function in its class name which we can dynamclly show which component is active
              to="/"
              className={({isActive}) => (isActive ? classes.active : undefined)}
              end //this indicates that this class name should be active  if the url end*s with /, if we dont add this property, the component with / route woudl alwasy be active 
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({isActive}) => (isActive ? classes.active : undefined)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
