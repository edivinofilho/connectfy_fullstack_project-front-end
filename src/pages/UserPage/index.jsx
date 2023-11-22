import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";

export const UserPage = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1>User Page</h1>
      {/* <p>Email: {user.email}</p>
            <p>Telephone: {user.telephone}</p>
            <p>Created: {user.createdAt}</p>             */}

      <p>
        <Link to="/home">Back</Link>
      </p>
    </div>
  );
};
