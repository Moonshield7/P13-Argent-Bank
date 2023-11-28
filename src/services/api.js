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
    
    if(!response.ok) throw new Error("Erreur lors du fetch login");
    

    const data = await response.json();
    return data
  }
  catch(error){
    console.error(error);
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

    if(!response.ok) throw new Error("Erreur lors du fetch user")

    const data = await response.json()
    return data.body;
  }
  catch (error) {
    console.error(error)
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

    if(!response.ok) throw new Error("Erreur lors du modify user")

    return response;
  }
  catch(error) {
    console.error(error)
  }
}