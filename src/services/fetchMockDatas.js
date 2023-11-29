export async function fetchAccounts() {
  try{
    const response = await fetch('/mockData/accounts.json');

    if(!response.ok) throw new Error("Error while fetching accounts data")

    const data = await response.json();
    return data;
  } catch(error) {
    console.error(error);
  }
}

export async function fetchTransactions() {
  try{
    const response = await fetch('/mockData/transactions.json');

    if(!response.ok) throw new Error("Error while fetching transactions data")

    const data = await response.json();
    return data;
  } catch(error) {
    console.error(error);
  }
}