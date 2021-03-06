import React, { useState, useEffect } from "react";
import "./App.css";
import { QuotesContext } from "../src/context/QuotesContext";
import axios from "axios";
import Quotes from "../src/components/Quotes";
import QuotesList from "../src/components/QuotesList";
import Forms from "./components/Forms";

function App() {
  const [addQuote, setAddQuote] = useState([]);
  useEffect(() => {
    axios.get(" https://quotes-db-mike.herokuapp.com/quotes").then(res => {
      // console.log(res))
      setAddQuote(res.data);
      console.log(res.data);
    });
  },[]);
  return (
    <div>
      <QuotesContext.Provider value={{ addQuote, setAddQuote }}>
        <QuotesList />
        <Forms/>
      </QuotesContext.Provider>
      
    </div>
  );
}

export default App;
