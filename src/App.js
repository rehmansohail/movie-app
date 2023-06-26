import React,{useEffect} from 'react';

const API_URL = 'http://www.omdbapi.com?apikey=71f0737f';


const App =()=> {
  
  const searchMovies= async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
  }

  useEffect(()=> {

  },[]);

    return (
        <div>
          <h1>Hello World</h1>
        </div>
    );
}

export default App;
