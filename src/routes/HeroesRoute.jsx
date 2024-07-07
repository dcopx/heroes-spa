import React from 'react'
import { Route, Routes } from 'react-router'
import { MarvelScreen } from '../screens/heroes/MarvelScreen'
import { DcScreen } from '../screens/heroes/DcScreen'
import { HeroScreen } from '../screens/heroes/HeroScreen'
import { Navbar } from '../ui/components/NavBar'
import { SearchScreen } from '../screens/search/SearchScreen'

export const HeroesRoute = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/marvel' element={<MarvelScreen />}></Route>
                <Route path='/dc' element={<DcScreen />}></Route>
                <Route path='/search' element={<SearchScreen />}></Route>
                <Route path='/hero/:id' element={<HeroScreen />}></Route>
                <Route path='/' element={<MarvelScreen />}></Route>
            </Routes>
        </>
    )
}
