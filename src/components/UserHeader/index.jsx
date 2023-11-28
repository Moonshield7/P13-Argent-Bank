import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editFirstname, editLastname, selectUser } from "../../utils/features/users";
import { modifyUser } from "../../services/api";

function UserHeader () {
  const user = useSelector(selectUser);
  const [modifyError, setModifyError] = useState(false);
  const dispatch = useDispatch();
  const [editing, setEditing] = useState(false);

    function toggleEditUser () {
      setEditing(!editing);
    }

    async function editUser () {
      const firstNameInput = document.getElementById("firstNameInput");
      const lastNameInput = document.getElementById("lastNameInput");
      if(firstNameInput.value || lastNameInput.value){      
        if(firstNameInput.value) {
          dispatch(editFirstname(firstNameInput.value));
        }
        if(lastNameInput.value) {
          dispatch(editLastname(lastNameInput.value))
        }
        
        const editUser = await modifyUser(user.token, firstNameInput.value, lastNameInput.value).catch(setModifyError(true));
        toggleEditUser();
        setModifyError(false);
      }

      
    }

  if(editing) {
    return (
      <div className="header">
        <h1>Welcome back</h1>
        <div className="edit-user">
          <input className="edit-user-input" id="firstNameInput" type="text" placeholder={user.firstname}></input>
          <input className="edit-user-input" id="lastNameInput" type="text" placeholder={user.lastname}></input>
        </div>
        <div className="edit-user">
          <button className="edit-user-button" onClick={editUser}>Save</button>
          <button className="edit-user-button" onClick={toggleEditUser}>Cancel</button>
          {modifyError ? <div className="">Erreur lors de la modification (connexion avec l'API), réessayez plus tard.</div> : ""}
        </div>

      </div>
    )
  }
  return (
    <div className="header">
      <h1>Welcome back<br />{user.firstname + " " + user.lastname} !</h1>
      <button className="edit-button" onClick={toggleEditUser}>Edit Name</button>
    </div>
  )
}

export default UserHeader;