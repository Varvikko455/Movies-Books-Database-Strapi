import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import StartPage from './components/StartPage';
import CategoryPage from './components/CategoryPage';
import MoviesPage from './components/MoviesPage';
import BooksPage from './components/BooksPage';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />}></Route>
          <Route path="/movies" element={<MoviesPage />}></Route>
          <Route path="/books" element={<BooksPage />}></Route>
          <Route path="/categories/:id" element={<CategoryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
