import React, { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext(AuthContext)
    const { pathname, search } = useLocation()

    localStorage.setItem('path', pathname + search)
    return (logged)
        ? children
        : <Navigate to='/login' />
}
