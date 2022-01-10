import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CategoryButtons() {

  const CategoriesUrl = 'http://localhost:1337/api/categories?populate=*';
  const [categories, setCategories] = useState([]);
 
  useEffect( () => {
   fetch(CategoriesUrl).then(response => response.json()).then(data => setCategories(data.data))
  }, [])

  return(
    <>
      <div className="button-category">
        {categories.map(({ attributes, id }) => {
          let { label } = attributes;
          return (
            <Link key={id} to={`/categories/${id}`}>{ label }</Link> 
          )
        })}
      </div>
    </>
  )
}


        