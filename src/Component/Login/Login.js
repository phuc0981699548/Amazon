import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signIn, signUp } from '../../Firebase/Firebase'
import GoToTop from '../GoToTop/GoToTop'
import './Login.css'

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault()

        await signUp(emailRef.current.value, passwordRef.current.value)
        .then((authUser) => {
            navigate("/")
        })
        .catch((error) => {
            alert(error.message);
        })
            
        }

    const login = async (e) => {
        e.preventDefault()

        await signIn(emailRef.current.value, passwordRef.current.value)
        .then((authUser) => {
            navigate("/")


        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className="login">
            <Link to='/'>
                <img 
                    className="login-logo" 
                    src="https://rubicmarketing.com/wp-content/uploads/2021/07/amazon-logo-2.jpeg"
                    alt="logo"
                />
            
            </Link>
            <div className="login-container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input ref={emailRef} type="email" />
                    <h5>Password</h5>
                    <input ref={passwordRef} type="password" />
                    <button 
                        type="submit"
                        onClick={login}
                    >
                        Sign in
                    </button>
                </form>
                
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button
                    onClick={register}
                >
                    Create your Amazon account
                </button> 
            </div>
            <GoToTop />
        </div>
    )
}

export default Login
