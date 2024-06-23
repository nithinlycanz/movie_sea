import React from 'react';
import './App.css';


const MovieCard = (props:any) =>{
   return (
    <>
    {props.movies.map((movie:any, index:any)=>(
    <div className ="movie">
        <img src = {movie.Poster!== 'N/A'? movie.Poster : 'http://via.placeholder.com/300X450.png?'} alt='movie'></img>
        
        <div>
            <h2>{movie.Title}</h2>
            <span>{movie.Year}</span>
        </div>
    </div>

    ))}
    </>
   );
};
  export default MovieCard;