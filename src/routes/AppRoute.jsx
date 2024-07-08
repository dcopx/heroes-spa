import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginScreen } from '../screens/login/LoginScreen'
import { HeroesRoute } from './HeroesRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRoute = () => {
    return (
        <Routes>
            <Route path='/login' element={
                <PublicRoute>
                    <LoginScreen />
                </PublicRoute>
            }></Route>

            <Route path='/*' element={
                <PrivateRoute >
                    <HeroesRoute />
                </PrivateRoute>
            } />
        </Routes>
    )
}
