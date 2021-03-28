import React, { useEffect, useState } from "react";
import Axios from "axios";
import Repo from "./Repo";

const Repos = ({ input, result }) => {
  const [repos, setRepos] = useState([]);
  const config = {
    headers: {
      Authorization: "token b1170e45372c3d5342b831eb7d4c9b9c07ec509f"
    }
  };
  useEffect(() => {
    async function fetchRepos() {
      const response = await Axios.get(`https://api.github.com/users/${input}/repos?per_page=5&sort=created:asc`, config);
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
