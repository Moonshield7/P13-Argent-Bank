import { useState } from "react";

function UserHeader () {
  const [firstName, setFirstName] = useState("Tony");
  const [lastName, setLastName] = useState("Jarvis");
  const [editing, setEditing] = useState(false);

    function toggleEditUser () {
      setEditing(!editing);
    }

    function editUser () {
      const firstNameInput = document.getElementById("firstNameInput");
      const lastNameInput = document.getElementById("lastNameInput");
      if(firstNameInput.value) {
        setFirstName(firstNameInput.value);
      }
      if(lastNameInput.value) {
        setLastName(lastNameInput.value);
      }
      toggleEditUser();
    }

  if(editing) {
    return (
      <div className="header">
        <h1>Welcome back</h1>
        <div className="edit-user">
          <input className="edit-user-input" id="firstNameInput" type="text" placeholder={firstName}></input>
          <input className="edit-user-input" id="lastNameInput" type="text" placeholder={lastName}></input>
        </div>
        <div className="edit-user">
          <button className="edit-user-button" onClick={editUser}>Save</button>
          <button className="edit-user-button" onClick={toggleEditUser}>Cancel</button>
        </div>

      </div>
    )
  }
  return (
    <div className="header">
      <h1>Welcome back<br />{firstName + " " + lastName} !</h1>
      <button className="edit-button" onClick={toggleEditUser}>Edit Name</button>
    </div>
  )
}

export default UserHeader;