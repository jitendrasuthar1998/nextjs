import React from 'react'

const Login = async() => {

  await new Promise((resolve) => {
    setTimeout(()=> {
      resolve("Intentional Delay");
    },2000)
  })

  return (
    <div>Login</div>
  )
}

export default Login