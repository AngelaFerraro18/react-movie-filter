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

  //salvo in una variabile il valore di partenza per il campo di input aggiunto per la ricerca per titolo
  const [writeField, setWriteField] = useState('');

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

  useEffect(() => {
    //salvo in una variabile result il valore del mio array di partenza
    let result = movies;

    //mi chiedo se il mio campo di input è diverso da una stringa vuota e uso il metodo trim() per eliminare eventuali spazi presenti nella stringa scritta, se il risultato è true allora procedo con la ricerca
    if (writeField.trim() !== '') {

      result = result.filter(movie => {

        //salvo in due variabili il valore della chiave title e lo trasformo in minuscolo, stessa cosa procedo per il campo che verrà riempito dall'utente in modo da verificare due stringhe entrambe minuscole
        const movieTitleLow = movie.title.toLowerCase();
        const writeTitleLow = writeField.toLowerCase();

        //essendo stringhe uso il metodo includes per verificare se le due stringhe siano uguali
        return movieTitleLow.includes(writeTitleLow);
      })
    }
    //di conseguenza andrò a mostrare il risultato, se avrò un match vedrò gli elementi che corrispondono alla ricerca, altrimenti vedrò l'intera lista
    setFilteredMovie(result);
  }, [writeField, moviesList])

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

      <input type="text" value={writeField} onChange={e => setWriteField(e.target.value)} placeholder="Cerca per titolo..." />

      {filteredMovie.map((movie, index) => <article key={index}>
        <h3>{movie.title}</h3>
        <span>Genere: <em>{movie.genre}</em></span>
      </article>)}
    </>
  )
}

export default App
