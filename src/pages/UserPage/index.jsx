import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { ContactModal } from "../../components/ContactModal";
import { UpdateUserForm } from "../../components/UpdateUserForm";
import { ContactContext } from "../../providers/ContactContext";

export const UserPage = () => {
  const { user, deleteUser, updateUser } = useContext(UserContext);
  const { closeModal, isModalOpen } = useContext(ContactContext);
  console.log("UserPage", user);

  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <ul>
      <li key={user.userId}>
        <h1>{user.name}</h1>
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Telephone: {user.telephone}</p>
          <hr />

          <button onClick={() => setIsDeleting(true)}>Delete Account</button>

          <button onClick={() => setIsUpdating(true)}>Update Details</button>
        </div>
      </li>
      <ContactModal isOpen={isDeleting} closeModal={() => setIsDeleting(false)}>
        <p>Are you sure that you want to delete this contact?</p>
        <button onClick={() => deleteUser(user.id)}>Delete Contact</button>
      </ContactModal>

      <ContactModal isOpen={isUpdating} closeModal={() => setIsUpdating(false)}>
        <p>Update User Details</p>
        <UpdateUserForm user={user} setIsUpdating={setIsUpdating} />
      </ContactModal>

      <Link to="/home">Back</Link>
      <ContactModal isOpen={isModalOpen} closeModal={closeModal}></ContactModal>
    </ul>
  );
};
