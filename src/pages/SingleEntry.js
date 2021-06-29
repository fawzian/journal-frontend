import React from "react";
import { Link } from "react-router-dom";

const SingleEntry = (Entry, match) => {
    const id = parseInt(match.params.id);
    const entry = entry.find((entry) => entry.id === id);

    // styles
    const div ={
        textAlign: "center",
        border: "3px solid green",
        width: "80%",
        margin: "30px auto",
    };
    return (
        <div style={div}>
            <h1>{entry.title}</h1>
            <h2>{entry.details}</h2>
            <Link to="/">
                <button>Go Back</button>
            </Link>
        </div>
    );
};

export default SingleEntry;