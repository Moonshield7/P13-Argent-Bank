import { PropTypes } from "prop-types"

function Account ({content}) {
  return (
    <li className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{content.title}</h3>
        <p className="account-amount">{content.amount}</p>
        <p className="account-amount-description">{content.description} </p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </li>
  )
}

Account.propTypes = {
  content: PropTypes.object
}

export default Account;