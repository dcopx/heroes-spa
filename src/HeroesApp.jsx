import React from 'react'
import { Route, Routes } from 'react-router'
import { MarvelScreen } from './screens/heroes/MarvelScreen'
import { DcScreen } from './screens/heroes/DcScreen'
import { AppRoute } from './routes/AppRoute'
import { Navbar } from './ui/components/NavBar'
import { HeroesRoute } from './routes/HeroesRoute'

export const HeroesApp = () => {
    return (
        <>

            <AppRoute />
        </>
    )
}
