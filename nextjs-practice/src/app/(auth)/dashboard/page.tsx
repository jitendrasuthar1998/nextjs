import React, {useState, useEffect} from 'react'

const Dashboard = () => {

    const [profileData, setProfileData] = useState({token:"",error:""});

    useEffect(()=> {
        fetch("/api/profile", {
            method:"GET",
            credentials:"include"
        }).then((res)=> {
            if(!res.ok) throw new Error("Unauthorized");

            return res.json();
        }).then((data)=> setProfileData(data))
        .catch((error: Error)=> setProfileData({token:"",error:error.message}))
    })

    return (
    <div>
        <h1>Dashboard</h1>
        <p>Token {profileData?.token}</p>
    </div>
  )
}

export default Dashboard