import Account from '../Account';
import UserHeader from '../UserHeader';
import { useEffect, useState } from 'react';
import { fetchAccounts } from '../../services/fetchMockDatas';

function UserContainer () {
  const [accountsData, setAccountData] = useState();
  useEffect(() => {
    async function getAccounts() {
      setAccountData(await fetchAccounts());
    }
    getAccounts();
  }, []);

  if(accountsData){  
    return (
      <main className="main bg-dark" style={{padding: '3rem'}}>
        <UserHeader />
        <h2 className="sr-only">Accounts</h2>
        <ul className="accounts-container">
          {accountsData.map(elem => <Account key={elem.title} content={elem} />)}
        </ul>
      </main>
    );
  }
}

export default UserContainer;