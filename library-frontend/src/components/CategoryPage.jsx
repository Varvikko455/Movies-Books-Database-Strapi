import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";


import '../scss/startpage.scss';


function CategoryPage() {

  const { id } = useParams();
  
  const CategoriesUrl = 'http://localhost:1337/api/categories?populate=*';
  
  const [books, setBooks] = useState([]);
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState('')
  
  useEffect(() => {
    
    const fetchData = async () => {
      const data = await fetch(CategoriesUrl);
      const json = await data.json();
      const test = (json.data)

      const result = test.filter(idC => idC.id === Number(id));

      setCategory(result[0].attributes.label)
      setBooks(result[0].attributes.books.data)
      setMovies(result[0].attributes.movies.data)
    }
    fetchData().catch(console.error);
  }, [id])
  
  function checkMovies() {
    if (movies.length === 0) {
      return <h2 className="head-title">Sorry, the library doesn't have any movies in this genre</h2>
    }
  }
  function checkBooks() {
    if (books.length === 0) {
      return <h2 className="head-title">Sorry, the library doesn't have any books in this genre</h2>
    }
  }

  return(
    <>
      <div className="App">
        <div>
          <Link className="go-back-button" to={'/'}><i class="fas fa-arrow-left"></i></Link>
          <h1>{ category }</h1>
        </div>
        
        
        <h1 className="head-title">Movies</h1>
        {checkMovies()}
        <div className="template">
          {movies.map(({ attributes }) => {
              let { title, realeaseDate, time, grade, id } = attributes
              return(
                <div key={id} className="info-box movie">
                  <div className="info-text">
                    <h3>{ title }</h3>
                    <p>Realese year: <strong>{ realeaseDate }</strong></p>
                    <p>Play time: <strong>{ time } min</strong></p>
                    <strong><p>Grade: { grade }</p></strong>
                  </div>
                </div>
                
              )
            })}
        </div>

        <h1 className="head-title">Books</h1>
        {checkBooks()}
        <div className="template">
          {books.map(({ attributes }) => {
              let { title, author, pages, grade, id } = attributes
              return(
                <div key={id} className="info-box book">
                  <div className="info-text">
                    <h3>{ title }</h3>
                    <p>Author: { author }</p>
                    <p>Pages: { pages } min</p>
                    <p>Grade: { grade }</p>
                  </div>
                </div>
                
              )
            })}
        </div>   
      </div>
    </>
  )
}

export default CategoryPage

