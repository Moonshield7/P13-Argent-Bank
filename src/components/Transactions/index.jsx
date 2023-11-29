import { accountsContent } from "../../assets/content/accounts";
import Account from "../Account";
import TransactionDetail from "../TransactionDetail";
import { useEffect, useState } from "react";
import { fetchTransactions } from "../../services/fetchMockDatas";

function Transactions () {
  const [transactionsData, setTransactionsData] = useState();

  useEffect(() => {
    async function getTransactions () {
      setTransactionsData(await fetchTransactions())
    }
    getTransactions();

  }, [])

  if(transactionsData){
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
        transactionsData.map(transaction => {
          return <TransactionDetail key={transaction.id} elem={transaction} />
        })
      }
    </table>
    </div>

  )}
}

export default Transactions;