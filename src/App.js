// components
import AllEntries from "./pages/AllEntries";
import SingleEntry from"./pages/SingleEntry";
import Form from "./pages/Form";

// react and hooks
import React, { useState, useEffect } from "react";


// import components from react router
import { Route, Switch, Link } from "react-router-dom";

function App(props) {

  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };
  
  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
  };

  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://journal-backend-fn.herokuapp.com/entries/";

  // State to Hold The List of Posts
  const [entry, setEntry] = useState([]);

  // null entry object
  const nullEntry = {
    title: "",
    body: "",
  };

  // state for edit journal entry
  const [targetEntry, setTargetEntry] = useState(nullEntry)

  //////////////
  // Functions
  //////////////

  // gets todos from api

const getEntries = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setEntry(data)
};

// function that adds an

const addEntries = async (newEntry) => {
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(newEntry)
  });
  // updated list of entries
  getEntries();
};

// selecting the entry you want to update
const getTargetEntry = (entry) => {
  setTargetEntry(entry);
  props.history.push("/edit")
};

// funtion to edit the entry on the form submission
const updateEntry = async (entry) => {
  const response = await fetch(url + entry.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(entry),
  });
  // updated list of all journal entries
  getEntries();
};

// delete function

const deleteEntry = async (entry) => {
  const response = await fetch(url + entry.id + "/", {
    method: "delete",
  });

  // get updated list
  getEntries();
  props.history.push("/");
};
  //////////////
  // useEffects
  //////////////

  // runs getEntries functions once when page is loaded
  useEffect(() => {
    getEntries();
  },[]);

  /////////////////////
  // returned JSX
  /////////////////////

  return (
    <div className="App">
      <h1 style={h1}>My Journal Entries</h1>
      <Link to="/new"><button style={button}>Create New Entry</button></Link>
      <Switch>
        <Route 
        exact
        path="/"
        render={(routerProps) => <AllEntries {...routerProps} entry={entry} /> }
       />
       <Route 
        path="/entry/:id"
        render={(routerProps) => <SingleEntry {...routerProps} entry={entry} edit={getTargetEntry} deleteEntry={deleteEntry}/>}
       />
       <Route 
        path="/new"
        render={(routerProps) => (<Form 
          {...routerProps}
          initialEntry={nullEntry} 
          handleSubmit={addEntries}
          buttonLabel="create journal entry"
          /> )}
       />
       <Route 
        path="/edit"
        render={(routerProps) => <Form 
          {...routerProps}
          initialEntry={targetEntry}
          handleSubmit={updateEntry}
          buttonLabel="Update Journal Entry"
          />}
       />
      </Switch>
    </div>
  );
}

export default App;
