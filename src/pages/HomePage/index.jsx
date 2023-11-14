import { Link } from "react-router-dom"

export const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to='/'>Logout</Link>
            <p><Link to='/home/contact'>Albert Whintorp</Link></p>
        </div>
    )
}