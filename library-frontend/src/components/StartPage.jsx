import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CategoryButtons from './CategoryButtons';

import '../scss/startpage.scss';

function StartPage() {
 
  const MoviesUrl = 'http://localhost:1337/api/movies?populate=*';
  const BooksUrl = 'http://localhost:1337/api/books?populate=*';

  
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);


  const [toggleMovie, setToggleMovie] = useState(true);
  const [toggleBook, setToggleBook] = useState(true);
  
  const toggleMoviesAndBooks = async () => {
    setToggleMovie(!toggleMovie);
    setToggleBook(!toggleBook);
  };

  
  useEffect(() => {
    fetch(MoviesUrl).then(response => response.json()).then(data => setMovies(data.data))
    fetch(BooksUrl).then(response => response.json()).then(data => setBooks(data.data))
  }, []);

  

  return(
    <>
      <div className="App">
        <h1 className="head-title">Movie & Book Database</h1>
        <CategoryButtons />
        
        <div className="button-header">
          <span>
            <div className={`circle ${toggleMovie ? 'green' : 'red'}`}></div>
            <Link className="direction-buttons" to={`/movies`}>Go to Movies</Link>
            {/* <button onClick={() => setToggleMovie(!toggleMovie)}>Show/Hide Movies</button> */}
          </span>

          <button className="direction-buttons" onClick={() => toggleMoviesAndBooks()}>Show/Hide Movies & Books</button>

          <span>
            <Link className="direction-buttons" to={`/books`}>Go to Books</Link>
            {/* <button onClick={() => setToggleBook(!toggleBook)}>Show/Hide Books</button> */}
            <div className={`circle ${toggleBook ? 'green' : 'red'}`}></div>
          </span>
        </div>

        {toggleMovie && <h1 className="title">Movies</h1>}
        {toggleMovie && 
        <div className={`template`}>  
            {movies.map(({ attributes }) => {
              let {title, realeaseDate, time, grade, cover, id} = attributes;
              return (
                <div key={id} className={`info-box movie`}>
                  <img src={`http://localhost:1337${cover.data.attributes.url}`} alt={title} height="200px"/>
                  <div className="info-text">
                    <h3>{title}</h3>
                    <p>Realese year: <strong>{realeaseDate}</strong></p>
                    <p>Play time: <strong>{time} min</strong></p>
                    <strong><p>Grade: {grade}</p></strong>
                  </div>
                </div>  
                )})}
        </div>}


        {toggleBook && <h1 className="title">Books</h1>}
        {toggleBook &&     
        <div className="template"> 
            {books.map(({ attributes }) => {
              let {title, author, pages, grade, cover, id} = attributes;
              return (
                <div key={id} className="info-box book">
                  <img src={`http://localhost:1337${cover.data.attributes.url}`} alt={title} height="200px"/>
                  <div className="info-text">
                    <h3>Title: {title}</h3>
                    <p>Author: {author}</p>
                    <p>Pages: {pages} min</p>
                    <p>Grade: {grade}</p>
                  </div>
                </div> 
                )})}
        </div>}
      </div>
    </>    
  )
}

export default StartPage;