import React from "react"
import PropTypes from "prop-types"
import "./PokemonStats.scss";

export const PokemonStats = ({ pokemon }) => (
  <div className="stats__container">
    <div className="stats__image-container">
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        alt={pokemon.name} className="stats__image"
      />
    </div>
    <div className="stats__name">
      {`${pokemon.name}`} #{`000${pokemon.id}`.slice(-4)}
      <br />
    </div>
    <tr className="stats__stats">
      <td className="table">
        <tr className="card__weight">
          <td className="test4">Type</td> <td className="test5">{pokemon.types.map(type => type.type.name)[0]}{" "}{pokemon.types.map(type => type.type.name)[1]}</td>
        </tr>
        <tr>
          <td className="test3">Weight</td> <td className="test2">{pokemon.weight / 10}</td>
        </tr>
        <tr>
          <td className="test3">Total moves</td><td className="test2">{pokemon.moves.length}</td>
        </tr>
        {/* </div> */}
        {pokemon.stats.map(ability => (
          <div className="stats__stat-container" key={ability.stat.name}>
            <div className="stats__stat-name">
              <td className="test1">{ability.stat.name}</td> <td className="test2">{ability.base_stat}</td>
            </div>
            <div className="stats__base-stat">
            </div>
            {/* <div className="stats__base-stat-value">
            {ability.base_stat}
          </div> */}
          </div>
        ))}
      </td>
    </tr>
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
  selectPokemon: () => { }
}