import {useState, useEffect} from 'react';
import MovieCard from './MovieCard'
import './App.css';
import searchImage from './search.svg';



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (searchTerm:any) => {
    const API_URL = `http://www.omdbapi.com/?s=${searchTerm}&apikey=c032e2d7`;

    const response = await fetch(API_URL);

    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies(searchTerm);
  },[]);

  return (
    <div className ="app">
      <h1>Film Web</h1>

      <div className="search-bar">
        <input 
        placeholder = "Search for films/movies" 
        value = {searchTerm}
        onChange ={
          (e) => setSearchTerm(e.target.value)
        }
        />
        
        <img src={searchImage} className = "search-image" onClick={()=>{
          searchMovies(searchTerm)}}></img>
      
      </div>
      
      