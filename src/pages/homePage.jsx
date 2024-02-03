import { Link } from "react-router-dom";
import classes from './homePage.module.css';

const Home = () => {
    return (<div>
        <div style={{
            position: "fixed",
            zIndex: "-100"
        }}>
            <img src="/background.png" alt="" />
        </div>

        <div className={classes.container}>
            <div className={classes.linkContainer}>
                <h1>Have an account ?</h1>
                <Link to={'/sign-in'}>Sign In</Link>
                <h1>Don't have one ?</h1>
                <Link to={"/sign-up"} >Sign Up</Link>
            </div>
        </div>

    </div>)

}

export default Home;