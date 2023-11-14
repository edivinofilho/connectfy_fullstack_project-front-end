
import { Link } from "react-router-dom"
export const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>
            <button><Link to='/'>Register</Link></button>
            <p><Link to='/'>Already Registered? Login here</Link> ;)</p>
        </div>
    )
}