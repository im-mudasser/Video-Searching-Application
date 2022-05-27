import React from "react";
import "./style.css";

export default class SearchBar extends React.Component {
  state = { term: "" };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  handleChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleFormSubmit}>
          <div className="field">
            <label> Video Search</label>
            <input
              type="text"
              value={this.state.term}
              placeholder="Enter the text here.. "
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
