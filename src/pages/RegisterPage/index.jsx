
import { Link } from "react-router-dom"
import { RegisterForm } from "../../components/RegisterForm"
export const RegisterPage = () => {
    return (
        <div>
            <h1>Register Page</h1>

            <RegisterForm />
            
            <p><Link to='/'>Already Registered? Login here</Link> ;)</p>
        </div>
    )
}