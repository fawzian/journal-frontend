// components
import AllEntries from "./pages/AllEntries";
import SingleEntry from"./pages/SingleEntry";
import Form from "./pages/Form";

// react and hooks
import React, { useState, useEffect } from "react";


// import components from react router
import { Route, Switch } from "react-router-dom";

function App() {

  ////////////////////
  // Style Objects
  ////////////////////

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  ///////////////
  // State & Other Variables
  ///////////////

  // Our Api Url
  const url = "https://journal-backend-fn.herokuapp.com/posts/";

  // State to Hold The List of Posts
  const [entry, setEntry] = useState([]);


  //////////////
  // Functions
  //////////////

  // gets todos from api

const getEntries = async () => {
  const response = await fetch(url);
  const data = await respinse.json();
  setEntry(data)
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
      <Switch>
        <Route 
        exact
        path="/"
        render={(routerProps) => <AllEntries {...routerProps} entry={entry}/> }
       />
       <Route 
        path="/post/:id"
        renter={(routerProps) => <SingleEntry {...routerProps} entry={entry}/>}
       />
       <Route 
        path="/new"
        render={(routerProps) => <Form {...routerProps} /> }
       />
       <Route 
        path="/edit"
        render={(routerProps) => <Form {...routerProps} />}
       />
      </Switch>
    </div>
  );
}

export default App;
