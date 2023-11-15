import { Link } from 'react-router-dom'
import { LoginForm } from '../../components/LoginForm'

export const LoginPage = () => {
    return (
        <div>
            <h1>Login Page</h1>
            
            <LoginForm />

            <p><Link to='/register'>What? Not registered yet? Click here</Link> ;)</p>
        </div>
    )
}