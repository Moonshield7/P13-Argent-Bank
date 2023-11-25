import { PropTypes } from "prop-types"
import { Link, useLocation } from "react-router-dom";

function Account ({content}) {
  const onTransactionsPage = (useLocation().pathname === '/transactions')
  console.log(onTransactionsPage)


  return (
    <li className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{content.title}</h3>
        <p className="account-amount">{content.amount}</p>
        <p className="account-amount-description">{content.description} </p>
      </div>
      { onTransactionsPage ? "" : (<Link to="/transactions" className="account-content-wrapper cta" >
        <button className="transaction-button">View transactions</button>
      </Link>)}
    </li>
  )
}

Account.propTypes = {
  content: PropTypes.object
}

export default Account;