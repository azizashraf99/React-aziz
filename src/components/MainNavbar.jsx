import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNavbar() {
  return (

    <nav style={{
        display:"flex",
        justifyContent:"center",
        gap:"10px",
        backgroundColor:"black",
        padding:"10px"
    }}>
    <Link className='bg-info-subtle text-decoration-none'  to="/">Home</Link>
    <Link className='bg-info-subtle text-decoration-none' to="/register">Register</Link>
    </nav>
  );
}
