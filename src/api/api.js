
export async function getAllPokemon (url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        reject(new Error(error))
      })
  })
}

export async function getPokemon (url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        resolve(data)
      })
      .catch(error => {
        reject(new Error(error))
      })
  })
}