//importo useEffect
import { useEffect } from "react";
//importo useState
import { useState } from "react";

const movies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {

  //salvo in una variabile il valore di partenza della lista dei film, che sarà una stringa vuota
  const [moviesList, setMoviesList] = useState('');

  //salvo in una variabile il valore di partenza del filtro dei film, che sarà il mio array di partenza
  const [filteredMovie, setFilteredMovie] = useState(movies);

  //vado ad usare useEffect per filtrare la mia lista
  useEffect(() => {

    //se la mia lista sarà vuota, allora mostrerò tutta la lista completa
    if (moviesList === '') {
      setFilteredMovie(movies);
    } else {
      //altrimenti vado a filtrare con filter e salvo il risultato della ricerca in una variabile: resultMovie
      const resultMovie = movies.filter(movie => movie.genre === moviesList);

      //vado ad usare la funzione per vedere in tempo reale la modifica all'UI il risultato della ricerca
      setFilteredMovie(resultMovie);
      console.log(resultMovie);
    }
  }, [moviesList]) //=> come dipendenza inserisco il valore movieList, che cambierà ogni volta che verrà selezionato un genere e di conseguenza andrà a influire su ciò che vedrò in pagina

  return (
    <>
      <h1>In proiezione al cinema!</h1>

      <select value={moviesList.genre} onChange={(e) => setMoviesList(e.target.value)}>
        <option value=""></option>
        <option>Azione</option>
        <option>Fantascienza</option>
        <option>Romantico</option>
        <option>Thriller</option>
      </select>


      {filteredMovie.map((movie, index) => <article key={index}>
        <h3>{movie.title}</h3>
        <span>Genere: <em>{movie.genre}</em></span>
      </article>)}
    </>
  )
}

export default App
