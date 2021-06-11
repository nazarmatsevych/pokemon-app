// import { get } from './api';
export const BASE_URL = 'http://pokeapi.co/api/v2/pokemon';

export function get(url, options) {
  return fetch(`${BASE_URL}${url}`, options)
    .then(response => response.json())
    .then(result => result.results);
}

export const getPokemons = () => get('/?limit=12');
// getPokemonAbility = (ability) => get()

