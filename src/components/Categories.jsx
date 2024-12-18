import React from 'react';
import Divider from './Divider';

const Categories = () => {
  return (
    <>
       <Divider title="Shop Our Categories"  />
      <div className="Cat">
        <div className="CatCard">
          <div className="CatImageContainer">
            <img src="/handbag.png" alt="handbags" />
            <h1 className="CatText">handbags</h1>
          </div>
        </div>

        <div className="CatCard">
          <div className="CatImageContainer">
            <img src="/tech.jpg" alt="tech" />
            <h1 className="CatText">tech</h1>
          </div>
        </div>

        <div className="CatCard">
          <div className="CatImageContainer">
            <img src="/furniture.jpg" alt="furniture" />
            <h1 className="CatText">furniture</h1>
          </div>
        </div>

        <div className="CatCard">
          <div className="CatImageContainer">
            <img src="/books.jpg" alt="books" />
            <h1 className="CatText">books</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
