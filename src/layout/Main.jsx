import { Component } from "react";
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?s=Matrix&apikey=7c931730")
      .then((responce) => responce.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str, type = "all") => {
    fetch(
      `https://www.omdbapi.com/?apikey=7c931730&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((responce) => responce.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {movies.length ? (
          <MovieList movies={this.state.movies} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
}

export default Main;
