import Account from "../Account";
import { accountsContent } from "../../assets/content/accounts";
import UserHeader from "../UserHeader";

function UserContainer () {
  return (
    <main className="main bg-dark" style={{padding: "3rem"}}>
      <UserHeader />
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