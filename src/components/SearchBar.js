import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    //stop page from refreshing
    event.preventDefault();
  };
  render() {
    return (
      <div className="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              value={this.state.term}
              type="text"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
