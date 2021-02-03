import React, { useState , useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { format } from 'date-fns';
import InfoCard from './InfoCard'
function App() {

  const URL = 'https://api.nasa.gov/planetary/apod?api_key=cpIVh1n5cT7gdxurNPJfIw7fYEakx1I89h1UEoYT';

    const date = format(new Date(), 'yyyy-MM-dd');

  const [nasaData , setNasaData] = useState({});
  useEffect( () => {
    axios.get(`${URL}&date=${date}`)
    .then( res => {
        console.log(res.data);
        setNasaData(res.data)   
    })
    .catch(err => err);
        
  },[date])
 


  return (
    <div className="App">
     <InfoCard
      title = {nasaData.title}
      date = {nasaData.date}
      photo = {nasaData.url}
      copyright = {nasaData.copyright}
      caption = {nasaData.explanation}
      />
    </div>
  );
}

export default App;