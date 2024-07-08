import React, { useContext } from 'react'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../context/auth/AuthContext'

export const LoginScreen = () => {
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)

    const onLogin = () => {
        const lastPath = localStorage.getItem('path') || '/'
        login('hfhgfhhgfh')
        navigate(lastPath, { replace: true })
    }
    return (
        <div className='container mt-5'>
            <h1>LoginScreen</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={onLogin}
            >
                Login
            </button>
        </div>
    )
}
