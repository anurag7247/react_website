import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Navbar from './Winter-internship-Apps/Navbar.js';
import Home from './Winter-internship-Apps/Home.js';
import WeatherApp from './Winter-internship-Apps/weather-app/WeatherApp.js';
import NewsApp from './Winter-internship-Apps/news-app/NewsApp.js';
import PageNotFound from './Winter-internship-Apps/news-app/Components/PageNotFound.jsx';
import SearchNews from './Winter-internship-Apps/news-app/Components/SearchNews.jsx';
const App = () => {
  return (
 <>
      <div>
        <Navbar />
      </div>
      <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="weather-app" element={<WeatherApp/>}/>  
      <Route path="news-app" element={<NewsApp/>}/>  
      <Route path="/Search-news" element={<SearchNews/>}/>
      <Route  path="/*" element={<PageNotFound/>}/>

      </Routes>
 </>
  );
};

export default App;
