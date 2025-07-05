"use client";
import React, {useState} from 'react'

const About = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>About</h1>
      <input name="about" placeholder="about" value={name} onChange={(e)=> setName(e.target.value)}/>

      <p>Hello {name}</p>
    </div>
  )
}

export default About