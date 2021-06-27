import React from "react";
import Entry from "../components/entry";

const AllEntries = (props) => {
    return props.entry.map((entry) => <Entry entry={entry} key={entry.id}/>)
};

export default AllEntries;