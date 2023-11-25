import { transactionsContent } from "../../assets/content/transactions";
import { accountsContent } from "../../assets/content/accounts";
import Account from "../Account";
import TransactionDetail from "../TransactionDetail";

function Transactions () {
  return (
    <div className="main bg-dark" style={{padding: "3rem"}}>
      <Account content={accountsContent[0]}/>
    <table className="transaction-table">
      <thead>
      <tr>
        <th className="arrow"></th>
        <th className="column-date">DATE</th>
        <th>DESCRIPTION</th>
        <th>AMOUNT</th>
        <th>BALANCE</th>
      </tr>
      </thead>
      {
        transactionsContent.map(transaction => {
          return <TransactionDetail key={transaction.id} elem={transaction} />
        })
      }
    </table>
    </div>

  )
}

export default Transactions;