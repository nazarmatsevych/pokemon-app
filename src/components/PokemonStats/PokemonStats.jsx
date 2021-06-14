/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './PokemonStats.scss';

export const PokemonStats = ({ pokemon }) => (
  <div className="stats__container">
    <div className="stats__image-container">
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
        alt={pokemon.name} className="stats__image"
      />
    </div>
    <div className="stats__name-container">
      <div className="stats__name">
        {`${pokemon.name}`} #{`000${pokemon.id}`.slice(-4)}
        <br />
      </div>
    </div>
    <table className="stats__stats">
      <tbody className="stats__stats-table">
        <tr className="card__stats">
          <td className="card__stats-stat4">Type</td><td className="card__stats-stat5">{pokemon.types.map(type => type.type.name)[0]}{' '}{pokemon.types.map(type => type.type.name)[1]}</td>
        </tr>
        <tr>
          <td className="card__stats-stat3">Weight</td><td className="card__stats-stat2">{pokemon.weight / 10}</td>
        </tr>
        <tr>
          <td className="card__stats-stat3">Total moves</td><td className="card__stats-stat2">{pokemon.moves.length}</td>
        </tr>
        {pokemon.stats.map(ability => (
          <React.Fragment key={ability.stat.name}>
            <tr className="stats__stat-name">
              <td className="card__stats-stat1">{ability.stat.name}</td><td className="card__stats-stat2">{ability.base_stat}</td>
            </tr>
            <tr className="stats__base-stat">
            </tr>
            </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
);

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
};

PokemonStats.defaultProps = {
  pokemon: {},
  selectPokemon: () => { }
};
