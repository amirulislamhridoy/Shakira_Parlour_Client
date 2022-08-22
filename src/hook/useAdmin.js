import axios from "axios";
import { useState } from "react";

const useAdmin = (user) => {
    const [admin, setAdmin] =useState(false)

    const email = user?.email
    if(email){
        fetch(`http://localhost:5000/admin?email=${email}`)
        .then(res => res.json())
        .then(data =>{
            setAdmin(data)
        })
    }
    return [admin]
}

export default useAdmin