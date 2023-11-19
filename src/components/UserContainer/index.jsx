import Account from "../Account";
import { accountsContent } from "../../assets/content/accounts";

function UserContainer () {
  return (
    <main className="main bg-dark" style={{padding: "3rem"}}>
    <div className="header">
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <button className="edit-button">Edit Name</button>
    </div>
    <h2 className="sr-only">Accounts</h2>
    <ul>
      {accountsContent.map(elem => {
        return <Account key={elem.title} content={elem} />
      })}
    </ul>

  </main>
  )
}

export default UserContainer;