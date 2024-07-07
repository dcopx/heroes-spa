import React from 'react'
import { Route, Routes } from 'react-router'
import { LoginScreen } from '../screens/login/LoginScreen'
import { HeroesRoute } from './HeroesRoute'

export const AppRoute = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginScreen />}></Route>
            <Route path='/*' element={<HeroesRoute />}></Route>
        </Routes>
    )
}
