import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from 'firebase/auth';
import useUser from './useUser';

export default function NavBar () {
    const { isLoading, user} = useUser();
 

    const navigate = useNavigate();

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li> 
                <li>
                    <Link to='/upcoming'>Upcoming Events</Link>
                </li> 
                <li>
                    <Link to='/management'>Event Management</Link>
                </li> 
                {isLoading ? <li>Loading...</li> : (
                  <>
                {user && (
                    <li style={{ color: 'white'}}>
                        Logged in as {user.email}
                    </li>
                )}
                 <li>
                    {user
                    ? <button onClick={() => signOut (getAuth())}>Logout</button>
                    : <button onClick={() => navigate('/login')}> Login</button>}                  
                </li> 
                 <li>
                    <Link to='/register'>Register</Link>
                </li> 

                </>
                )}
            </ul>
        </nav>
    )
}