import React, { useState } from 'react';
import CustomNavbar from '../Components/Navbar';
import SearchBar from './SearchBar';
import axios from 'axios';
import CardNews from './CardNews';

const SearchNews = () => {
  const [sNews, updatesNews] = useState('');
  const [nDate, updatenDate] = useState('');
  const [newsData, updateNewsData] = useState([]);

  const submit = () => {
    fetchData();
  };

  const fetchData = () => {
    const url = 'https://newsapi.org/v2/everything';
    const apiKey = '6b5a8691ccd74a78a81beec1f528e7f8';

    axios.get(`${url}?q=${sNews}&from=${nDate}&sortBy=popularity`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    }).then((response) => {
      console.log(response.data.articles);
      const articles = response.data.articles;

      updateNewsData(
        articles.map((article) => ({
          author: article.author,
          urlImage: article.urlToImage,
          title: article.title,
          description: article.description,
        }))
      );
    });
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <CustomNavbar />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <SearchBar sNews={sNews} updatesNews={updatesNews} nDate={nDate} updatenDate={updatenDate} onSubmit={submit} />
        </div>
      </div>
      <div className="row">
        {newsData.map((article, index) => (
          article.urlImage != null && (
            <div key={index} className="col-lg-3 col-md-12 col-sm-12">
              <CardNews author={article.author} urlImage={article.urlImage} title={article.title} description={article.description} />
            </div>
          )
        ))}
      </div>
    </>
  );
};

export default SearchNews;
