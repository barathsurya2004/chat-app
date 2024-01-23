import { Link, Outlet } from 'react-router-dom';
import classes from './navbar.module.css';
import { useContext } from 'react';
import { userContext } from '../contexts/userContext';
import { signUserOut } from '../utils/firebase';

const NavBar = () => {
    const { user } = useContext(userContext);
    const signOutHandler = async () => {
        await signUserOut();
    }
    return (
        <>
            <nav className={classes.navBar}>
                <div className={classes.logo}>
                    <Link to="/app">
                        My App
                    </Link>
                </div>
                {user ? <div onClick={signOutHandler} style={{
                    cursor: "pointer",
                }}>
                    Sign Out
                </div> : <div>
                    <ul className={classes.navList}>
                        <li>
                            <Link to="/sign-up">
                                Sign Up
                            </Link>
                        </li>
                        <li>
                            <Link to="/sign-in">
                                Sign In
                            </Link>
                        </li>
                    </ul>
                </div>
                }
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;