import { Component } from "react";
import MovieList from "../components/MovieList";

class Main extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?s=Matrix&apikey=7c931730")
      .then((responce) => responce.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  render() {
    const { movies } = this.state;
    return (
      <main className="container content">
        {movies.length ? (
          <MovieList movies={this.state.movies} />
        ) : (
          <h2>Loading...</h2>
        )}
      </main>
    );
  }
}

export default Main;
