import React from "react";

const Repo = ({ name, repoUrl, watchers, stars, forks }) => {
  return (
    <>
      <div class="card">
        <div class="card-body d-flex justify-content-around align-items-center">
          <a class="blockquote text-center  mb-0" href={repoUrl} target="_blank" rel="noreferrer" style={{ width: "280px" }}>
            {name}
          </a>
          <div>
            <button className="btn btn-primary ms-3 px-3 my-1">Stars: {stars}</button>
            <button className="btn btn-danger ms-3 px-3 my-1">Watchers: {watchers}</button>
            <button className="btn btn-success ms-3 px-3 my-1">Fork: {forks}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Repo;
