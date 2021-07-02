import React from "react";
import Entry from "../components/entry";

const AllEntries = (props) => {
    return props.entries.map((entry) => {
     return <Entry entry={entry} key={entry.id}/>
   })
   }

export default AllEntries;