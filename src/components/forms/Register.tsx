import React, { useRef } from 'react'
import './Forms.css'

const Register = () => {

    const firstNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleRegisterFormSubmit = () => {
        console.log(emailRef.current?.value, passwordRef.current?.value);
    }

    return (
        <div className='container'>
            <h3 className="title">Register</h3>
            <div className='form'>
                <label htmlFor="firstName">First Name</label>
                <input ref={firstNameRef} type="text" name="firstName" id="firstName" />
                <label htmlFor="lastName">Last Name</label>
                <input ref={lastNameRef} type="text" name="lastName" id="lastName" />
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
                <button onClick={handleRegisterFormSubmit} value="Log In" >Log In</button>
            </div>
        </div>
    )
}

export default Register
