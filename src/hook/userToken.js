import { useState } from "react"

const useToken = (user) => {
    const [token, setToken] = useState('')
    const email = user?.user?.email
    const name = user?.user?.displayName
    if(email){
        fetch(`http://localhost:5000/login/${email}`, {
        method: "PUT",
        body: JSON.stringify({name: name, email: email}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
            setToken(json.token)
            localStorage.setItem('accessToken', json.token)
        });
      }
    return [token]
}

export default  useToken