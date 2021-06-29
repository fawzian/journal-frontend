import React from "react";
import { Link } from "react-router-dom";


const SingleEntry = ({ entry, match, edit, deleteEntry }) => {
  const id = parseInt(match.params.id); 
  const single = entry.find((entry) => entry.id === id);

  ////////////////////
  // Styles
  ///////////////////
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{single.title}</h1>
      <h2>{single.body}</h2>
      <button onClick={(event) => edit(single)}>Edit</button>
      <button onClick={(event) => deleteEntry(single)}>Delete</button>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default SingleEntry;