import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <NavLink className="pr-4 active bg-red-800" to="/">Home</NavLink>
            <NavLink className="pr-3" to="/addCoffee">AddCoffee</NavLink>
            <NavLink className="pr-3" to="/users">User</NavLink>
            <NavLink className="pr-3" to="/signUp">SignUp</NavLink>
            <NavLink to="/signIn">SignIn</NavLink> 

        </div>
    );
};

export default Header;