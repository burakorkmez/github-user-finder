import React, { useEffect, useState } from "react";
import Axios from "axios";
import Repo from "./Repo";

const Repos = ({ input, result }) => {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    async function fetchRepos() {
      const response = await Axios.get(`https://api.github.com/users/${input}/repos?per_page=5&sort=created:asc`);
      console.log(response.data);
      setRepos(response.data);
    }
    fetchRepos();
  }, [result]);
  return (
    repos !== [] && (
      <div className="container my-4">
        <h1 className="text-center">Latest Repos</h1>
        {repos.map(repo => {
          return <Repo key={repo.id} repoUrl={repo.html_url} name={repo.name} stars={repo.stargazers_count} watchers={repo.watchers_count} forks={repo.forks_count} />;
        })}
      </div>
    )
  );
};

export default Repos;
