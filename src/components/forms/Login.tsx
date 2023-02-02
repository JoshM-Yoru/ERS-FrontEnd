import { useQuery } from '@tanstack/react-query';
import { Axios } from 'axios';
import React, { useRef } from 'react'
import './Forms.css'

const Login = () => {

    const { } = useQuery([""], () => {
        // Axios
    })

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleLoginFormSubmit = () => {
        console.log(emailRef.current?.value, passwordRef.current?.value);
    }

    return (
        <div className='container'>
            <h3 className="title">Login</h3>
            <div className='form'>
                <label htmlFor="email">Email</label>
                <input ref={emailRef} type="text" name="email" id="email" />
                <div className='spacer' />
                <label htmlFor="password_login">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    ref={passwordRef}
                />
                <div className='spacer' />
                <div className='spacer' />
                <button onClick={handleLoginFormSubmit} value="Login" >Login</button>
            </div>
        </div>
    )
}

export default Login
