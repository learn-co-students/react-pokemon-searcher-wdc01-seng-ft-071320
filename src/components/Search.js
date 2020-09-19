import React from "react";

const Search = (props) => {
  // console.log(props);
  return (
    <div className="ui search" onChange={(e) => props.handleChange(e)}>
      <div className="ui icon input">
        <input className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
};

export default Search;
