"use client";

import React from 'react'

const Login = () => {

  // await new Promise((resolve) => {
  //   setTimeout(()=> {
  //     resolve("Intentional Delay");
  //   },2000)
  // })

  // return (
  //   <div>Login</div>
  // )

  // login with username and password

  async function handleLogin(e:React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method:"POST",
      body: JSON.stringify({username:"admin", password:"123456"})
    })

    if(res.ok){
      alert("Logged in successfully.");
    }
    else{
      alert("Login failed");
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <button type="submit">Login as Admin</button>
    </form>
  )
}

export default Login