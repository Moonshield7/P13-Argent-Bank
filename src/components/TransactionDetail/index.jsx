import { useState } from 'react';
import { PropTypes } from 'prop-types';

function TransactionDetail ({elem}) {
  const [showDetails, setShowDetails] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [editNotes, setEditNotes] = useState(false);
  const [elemCategory, setElemCategory] = useState(elem.category);
  const [elemNotes, setElemNotes] = useState(elem.notes);

  function toggleShowDetails () {
    setShowDetails(!showDetails);
  }

  function toggleEditCategory() {
    setEditCategory(!editCategory);
  }

  function changeCategory(){
    const categorySelect = document.getElementById('account-category');
    setElemCategory(categorySelect.value);
    toggleEditCategory();
  }

  function toggleEditNotes() {
    setEditNotes(!editNotes);
  }

  function changeNotes(){
    const categorySelect = document.getElementById('account-notes');
    setElemNotes(categorySelect.value);
    toggleEditNotes();
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
            <td colSpan={4}>
              <p>Transaction type : {elem.transactionType}</p>
              <p>Category : 
              {editCategory ?
                <select  className="small-margin-left"name="category" id="account-category" onChange={changeCategory}>
                  <option value="Food">Food</option>
                  <option value="Health">Health</option>
                  <option value="Hobbies">Hobbies</option>
                  <option value="Pet">Pet</option>
                </select>
                : (<span className="small-margin-left">{elemCategory} <i className="fa-solid fa-pen small-margin-left" onClick={toggleEditCategory}></i></span>)
              }</p>
              <p>Notes : 
                {editNotes ? 
                <span className="small-margin-left">
                  <input type="text" id="account-notes" placeholder={elemNotes}/>
                  <button className="small-margin-left" onClick={changeNotes}>Save</button>
                </span>
                : <span className="small-margin-left">{elemNotes} <i className="fa-solid fa-pen small-margin-left" onClick={toggleEditNotes}></i></span>}</p>
            </td>
            
        </tr>
        :
        ''
      }
    </tbody>
  );
}

TransactionDetail.propTypes = {
  elem: PropTypes.object
};

export default TransactionDetail;