import queryString from 'query-string'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../ui/hooks/useForm'
import { getHeroesByName } from '../../helpers/func/getHeroesByName'
import { HeroCard } from '../heroes/components/HeroCard'

export const SearchScreen = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { q = '' } = queryString.parse(location.search)
    const { inputSearch, onInputChange } = useForm({
        'inputSearch': q
    })

    const heroes = getHeroesByName(q)
    const searchEmpty = (heroes.length === 0) && q.length > 0

    const onSubmit = (event) => {
        event.preventDefault()

        navigate(`?q=${inputSearch}`)

    }
    return (
        <>
            <div >
                <h1>SearchScreen</h1>
                <hr />
                <div className="row">
                    <div className="col-5">
                        <h3>Searching</h3>
                        <hr />
                        <form onSubmit={onSubmit}>
                            <input
                                type="text"
                                className='form-control'
                                name='inputSearch'
                                placeholder='Search a hero'
                                autoComplete='off'
                                value={inputSearch}
                                onChange={onInputChange}
                            >
                            </input>
                            <button
                                className='btn btn-outline-primary mt-2'
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <div className="col-7">
                        <h3>Results</h3>
                        <hr />
                        <div className="alert alert-primary" style={{ display: q.length === 0 ? '' : 'none' }}>Search a Hero</div>
                        <div className="alert alert-danger" style={{ display: searchEmpty ? '' : 'none' }}>Nothing found with <b>{q}</b></div>
                        <div>
                            {
                                heroes.map(hero => (
                                    <HeroCard key={hero.id} hero={hero} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
