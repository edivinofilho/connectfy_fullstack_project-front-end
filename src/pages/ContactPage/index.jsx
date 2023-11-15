import { useState } from "react"
import { Link } from "react-router-dom"


export const ContactPage = () => {
    const [isDeleting, setIsDeleting] = useState(null)

    return (
        <div>
            <h1>Contact Page</h1>
            <p>Contact Name</p>
            <Link to='/home'>Back</Link>
            <hr />
            <button onClick={() => setIsDeleting}>Delete Contact</button>
        </div>
    )
}