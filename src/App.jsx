
const movieList = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]


function App() {


  return (
    <>
      <h1>In proiezione al cinema!</h1>
      {movieList.map((movie, index) => <article key={index}>
        <h3>{movie.title}</h3>
        <span>Genere: <em>{movie.genre}</em></span>
      </article>)}
    </>
  )
}

export default App
