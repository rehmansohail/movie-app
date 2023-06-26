import React,{useEffect, useState} from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCrad';

const API_URL = 'http://www.omdbapi.com?apikey=71f0737f';


const App =()=> {
  
  const [movies,setMovies]=useState([]);

  const searchMovies= async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(()=> {

  },[]);

    return (
        <div className="app">
          <h1>MovieHub</h1>
          <div className="search">
            <input placeholder="Search for movies" value="superman" onChange={()=>{}}>
            </input>
            <img src={searchIcon} alt="search" onClick={()=> {}}></img>
          </div>
          <div className="container">
            <MovieCard movie1={movies}/>

          </div>
          </div>

    );
}

export default App;
