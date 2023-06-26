import React,{useEffect} from 'react';
import './App.css';
import searchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=71f0737f';


const App =()=> {
  
  const searchMovies= async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  }

  useEffect(()=> {

  },[]);

    return (
        <div className="app">
          <h1>MovieHub</h1>
          <div className="search">
            <input placeholder="Search for movies">
            </input>
          </div>
        </div>
    );
}

export default App;
