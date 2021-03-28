import React from "react";

const Search = ({ handleChange, handleClick, input }) => {
  return (
    <div className="container">
      <div className="card mt-4">
        <div className="card-body">
          <h1 className="card-title display-3">Search GitHub Users</h1>
          <h3 className="card-text lead  text-muted">To get a user profile and repos, type in their username.</h3>
          <input onChange={handleChange} type="text" className="form-control" placeholder="GitHub Username" value={input} />
          <button onClick={handleClick} type="button" className="btn btn-primary mt-3">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
