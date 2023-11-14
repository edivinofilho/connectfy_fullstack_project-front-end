import { Link } from "react-router-dom"
export const LoginPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <button><Link to='/home'>Login</Link></button>
            <p><Link to='/register'>What? Not registered yet? Click here</Link> ;)</p>
        </div>
    )
}