import { useState,useEffect } from "react";
import Header from "./components/header";
import "../src/styles/App.css";
import {Routes,Route} from "react-router-dom"
import ShowCards from "./page/Home";
import User from "./page/card";


function App() {
  return <>
  <Header/>
  <Routes>
    <Route path="/" element={<ShowCards/>}/>
    <Route path="/:id" element={<User/>}/>
  </Routes>
  </>;
}

export default App;
