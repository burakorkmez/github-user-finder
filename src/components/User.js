import React from "react";

const User = ({ result }) => {
  return (
    <div className=" card container my-3">
      <div className="row">
        <div className="col-md-3 text-center">
          <img src={result.avatar_url} className="img-fluid mt-4" alt="" />
          <div className="mb-5">
            <a className="btn btn-primary mt-3 w-100" href={result.html_url} target="_blank" rel="noreferrer">
              View Profile
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <button className="btn btn-primary mx-3 mt-3">Public Repos: {result.public_repos}</button>
          <button className="btn btn-danger mx-3 mt-3">Public Gists: {result.public_gists}</button>
          <button className="btn btn-success mx-3 mt-3">Followers: {result.followers}</button>
          <button className="btn btn-secondary mx-3 mt-3">Following: {result.following}</button>
          <h1 className="my-4">{result.name}</h1>
          <div className="card mt-1">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Company: {result.company === null ? "null" : result.company}</li>
              <li className="list-group-item">Website/Blog: {result.blog === "" ? "null" : result.blog}</li>
              <li className="list-group-item">Location: {result.location}</li>
              <li className="list-group-item">Member Since: {result.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
