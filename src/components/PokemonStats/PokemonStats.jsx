import React from 'react'
import PropTypes from 'prop-types'
import './PokemonStats.scss';

export const PokemonStats = ({ pokemon }) => (
    <div className='stats__container'>
      <div className='stats__image-container'>
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={pokemon.name} className="stats__image"
        />
      </div>
      <div className='stats__name'>
        {`${pokemon.name}`}
      </div>
      <div className='stats__stats'>
      <div className='card__height-container'>
        <>
          <span className='card__height'>
            <div>
              Height:
            </div>
            <div>
              {`${pokemon.height / 10} m`}
            </div>
          </span>
          <span className='card__weight'>
            <div>
              Weight:
            </div>
            <div>
              {`${pokemon.weight / 100} kg`}
            </div>
          </span>
          </>
        </div>
        {pokemon.stats.map(ability => (
          <div className='stats__stat-container' key={ability.stat.name}>
            <div className='stats__stat-name'>
              {ability.stat.name}
            </div>
            <div className='stats__base-stat'>
            </div>
              <div className='stats__base-stat-value'>
                {ability.base_stat}
              </div>
          </div>
        ))}
      </div>
    </div>
)

PokemonStats.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
      base_stat: PropTypes.number.isRequired,
      ability: PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    })).isRequired
  }),
  selectPokemon: PropTypes.func,
}

PokemonStats.defaultProps = {
  pokemon: {},
  selectPokemon: () => {}
}