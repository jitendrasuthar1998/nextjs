"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const Dashboard = () => {
  const [profileData, setProfileData] = useState({ token: "", error: "" });

  useEffect(() => {
    fetch("/api/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");

        return res.json();
      })
      .then((data) => setProfileData(data))
      .catch((error: Error) =>
        setProfileData({ token: "", error: error.message })
      );
  }, []);

  if(!profileData.token){
    return <p>Loading..</p>
  }

  if(profileData.error){
    return <p>Access Denied. <Link href="login"></Link></p>
  }

  async function handleLogout(e:React.FormEvent) {
    e.preventDefault();
    await fetch("/api/logout", {
        method:"POST",
        credentials:"include"
    }).then((res)=> {
        if(!res.ok) throw new Error("Unable to logout");
        else return alert("Logged out successfully");
    }).catch((error)=> {
        console.log("Error in logout", error.message )
    })
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Token {profileData?.token}</p>

      <form onSubmit={handleLogout}>
        <button>Logout</button>
      </form>
    </div>
  );
};

export default Dashboard;
