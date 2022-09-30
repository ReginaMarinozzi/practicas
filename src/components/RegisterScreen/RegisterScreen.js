import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginContext } from '../../context/LoginContext'
import { Typography } from '@mui/material'

const RegisterScreen = () => {

  const { signup } = useLoginContext();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };


  return (
   
    <div className="w-full max-w-xs m-auto text-black">

    <Typography variant="h5" sx={{marginTop: 10}}> Register </Typography>

    
    {error && <p>{error}</p>}

      <form
        onSubmit={handleSubmit}
      
      >
        <div className="mb-4">
          <label
            htmlFor="email"  
          >
            Email
          </label>
          <input
            type="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="youremail@company.tld"
          />
        </div>

        <div>
          <label
            htmlFor="password" 
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="*************"
          />
        </div>

        <button >
          Register
        </button>
      </form>
      <p>
        Already have an Account?
        <Link to="/login">
          Login
        </Link>
      </p>
    </div>
  )
}

export default RegisterScreen