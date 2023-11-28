export async function fetchLogin (emailUser, passwordUser) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'email': emailUser,
        'password': passwordUser})
    });
    const data = await response.json();
    return data
  }
  catch(error){
    console.log("Erreur lors du fetch login")
  }
}

export async function fetchUser (token) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: '',
    })
    const data = await response.json()
    console.log(data);
    return data.body;
  }
  catch (error) {
    console.log("Erreur lors du fetch user")
  }
}

export async function modifyUser (token, newFirstname, newLastname) {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/profile',{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        firstName: newFirstname,
        lastName: newLastname
      })
    })
    return response;
  }
  catch {
    console.log("Erreur lors du modify user")
  }
}