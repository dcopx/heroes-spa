import React from 'react'
import { HeroList } from './components/HeroList'

export const MarvelScreen = () => {

    return (
        <>
            <h1>MarvelScreen</h1>
            <hr />
            <HeroList publisher={'Marvel Comics'} />
        </>
    )
}
