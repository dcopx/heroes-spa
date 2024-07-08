import React, { useContext } from 'react'
import { AuthContext } from '../context/auth/AuthContext'

export const PublicRoute = ({ children }) => {
    const { logged } = useContext(AuthContext)
    return (!logged)
        ? children
        : <></>
}
