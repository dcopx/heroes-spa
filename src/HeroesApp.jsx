import React from 'react'
import { AppRoute } from './routes/AppRoute'
import { AuthProvider } from './context/auth/AuthProvider'

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRoute />
        </AuthProvider>
    )
}
