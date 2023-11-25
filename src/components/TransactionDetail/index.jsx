import { useState } from "react";
import { PropTypes } from "prop-types";
import pen from "../../assets/img/pen-solid.svg"

function TransactionDetail ({elem}) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleShowDetails () {
    setShowDetails(!showDetails);
  }

  return (
    <tbody>
      <tr>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" onClick={toggleShowDetails}>
            {
              !showDetails ? <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/> : <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
            }
            </svg>
            
        </td>
        <td> {elem.date} </td>
        <td> {elem.description} </td>
        <td> {elem.amount} </td>
        <td> {elem.balance} </td>
      </tr>
      {
        showDetails ? 
        <tr className="transaction-dropdown">
            <td></td>
            <td colSpan={2}>
              <p>Transaction type : {elem.transactionType}</p>
              <p>Category : {elem.category}</p>
              <p>Notes : {elem.notes}</p>
            </td>
            
        </tr>
        :
        ""
      }
    </tbody>
  )
}

TransactionDetail.propTypes = {
  elem: PropTypes.object
}

export default TransactionDetail;