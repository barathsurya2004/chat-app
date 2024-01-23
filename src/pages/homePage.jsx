import { Link } from "react-router-dom";


const Home = () => {
    return (<div>
        <div style={{
            display: "flex"
            , flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: '100%'
        }}>

            <h1 style={{
            }}>
                NeEXT Chat
            </h1>
            <button style={{
                width: '200px'
            }}>
                <Link to={'/sign-in'}>
                    go to chat room
                </Link>
            </button>
        </div>

        <div style={{
            display: "flex"
            , flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: '100%'
        }}>

            <h1 style={{
            }}>
                don't have an accout ?
            </h1>
            <button style={{
                width: '200px'
            }}>
                <Link to={'/sign-up'}>
                    Sign up
                </Link>
            </button>
        </div>

    </div>)

}

export default Home;