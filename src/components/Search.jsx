import { Component } from "react";

class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handleFilter = (event) => {
    this.setState(
      () => ({ type: event.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Пошук"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(event) => {
              this.setState({ search: event.target.value });
            }}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => {
              this.props.searchMovies(this.state.search, this.state.type);
            }}
          >
            Пошук
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>Всі</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Фільми</span>
          </label>

          <label>
            <input
              className="with-gap"
              name="group1"
              type="radio"
              data-type="serial"
              onChange={this.handleFilter}
              checked={this.state.type === "serial"}
            />
            <span>Серіали</span>
          </label>
        </div>
      </div>
    );
  }
}
export default Search;
