import React from "react";
import { Link } from "react-router-dom";

const Entry = ({ entry }) => {
    // styling 

    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    };

    return (
        <div style={div}>
            <Link to={`/entry/${entry.id}`}>
                <h1>{entry.title}</h1>
            </Link>
            <h2>{entry.body}</h2>
         </div>
    );
};

export default Entry;