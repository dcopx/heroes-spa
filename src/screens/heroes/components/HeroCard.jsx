import React from 'react'
import { Link } from 'react-router-dom'

export const HeroCard = ({ hero }) => {
    const imgPath = `/assets/heroes/${hero.id}.jpg`
    return (
        <div className="card m-2">
            <div className="row no-gutters">
                <div className="col-4">
                    <img
                        className="card-img"
                        src={imgPath}
                        alt={hero.superhero}
                    ></img>
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <div className="card-title">
                            <h5>{hero.superhero}</h5>
                        </div>
                        <p className='card-text'>{hero.alter_ego}</p>
                        {(hero.alter_ego != hero.characters) && <p> {hero.characters}</p>}
                        <p className='card-text'>
                            <small className='text-muted'>{hero.first_appearance}</small>
                        </p>
                        <Link to={`/hero/${hero.id}`}>Mas...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
