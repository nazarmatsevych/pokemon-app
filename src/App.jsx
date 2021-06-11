
import React, { useEffect, useState } from 'react'
import './App.scss'
import { Card } from './components/Card/Card'
import { PokemonStats } from './components/PokemonStats/PokemonStats'
import { getAllPokemon, getPokemon } from './api/api'
import { URL } from './api/constants'
import { Loader } from './components/Loader/Loader';

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [pokemon, setPokemon] = useState([])
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  useEffect(() => {
    const downloadData = async () => {
      setLoading(true)
      const response = await getAllPokemon(URL)
      await loadPokemon(response.results)
      setLoading(false)
    }

    downloadData()
  }, [])

  const loadPokemon = async (data) => {
    const pokemon = await Promise.all(
      data.map(async pokemon => {
        return await getPokemon(pokemon.url)
      }
      ))

    setPokemonData(pokemon)
  }

  const handlePokemonSelection = (pokemonId) => {
    setPokemon(pokemonData.filter(pokemon => pokemon.id === pokemonId))
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  useEffect(() => {
    setFilteredPokemons(pokemonData.filter(
      pokemon => pokemon.name.toLowerCase().startsWith(query.toLowerCase()) ||
        pokemon.name.toLowerCase().includes(query.toLowerCase()))
    )
  },[query])
  

  return (
    <>
      <div className="header title is-2">Pokedex App</div>
      {loading
        ? (
          <Loader />
        )
        : (
          <div className='main'>
            <input
              type="text"
              id="search-query"
              className="input input is-normal"
              placeholder="Find pokemon by name"
              value={query}
              onChange={handleChange}
            />
            <div className="main__container">
              {pokemonData.map(pokemon => (
                <Card
                  key={pokemon.id}
                  pokemon={pokemon}
                  selectPokemon={handlePokemonSelection}
                />
              ))}
            </div>
            <div>
              {pokemon.map(pokemon => (
                <PokemonStats
                  pokemon={pokemon}
                  key={pokemon.id}
                />
              ))}
            </div>
          </div>
        )}
    </>
  )
}

export default App