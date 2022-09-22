import Movie from "./Movie";

function MovieList(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <h4>Нічого не знайдено</h4>
      )}
    </div>
  );
}
export default MovieList;
