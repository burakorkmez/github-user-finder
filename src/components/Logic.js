import React, { useState } from "react";
import Axios from "axios";
import User from "./User";
import Search from "./Search";
import Repos from "./Repos";

const Logic = () => {
  const [input, setInput] = useState("");
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState();
  const config = {
    headers: {
      Authorization: process.env.REACT_APP_GITHUB_TOKEN
    }
  };
  function handleChange(e) {
    setInput(e.target.value);
  }

  const handleClick = async () => {
    const response = await Axios.get(`https://api.github.com/users/${input}`, config);
    console.log(response.data);
    setResult(response.data);
    setSearched(true);
    setInput("");
  };

  return searched ? (
    <>
      <Search handleChange={handleChange} handleClick={handleClick} input={input} />
      <User result={result} />
      <Repos input={input} result={result} />
    </>
  ) : (
    <Search handleChange={handleChange} handleClick={handleClick} input={input} />
  );
};

export default Logic;
