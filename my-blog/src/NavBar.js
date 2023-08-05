import { Link , useNavigate} from "react-router-dom";
import { getAuth , signOut } from 'firebase/auth'
import useUser from "./hooks/UseUser";

const NavBar = () => {
    const {user} = useUser(); 
    const navigate = useNavigate();

    return(
        <nav>
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <il>
                <Link to="/about">About</Link>
            </il>
            <il>
                <Link to="/Articles">Articles</Link>
            </il>
            </ul>
            <div className="nav-right">
                {user
                    ?<button onClick={()=>{
                        signOut(getAuth());
                    }}>Log Out</button>
                    : <button onClick={()=>{
                        navigate('/login');
                    }}>Log In</button>
                }
            </div>
        </nav>
    )
};

export default NavBar;
