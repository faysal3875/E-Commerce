import React from "react";
import "./Home.css";
import home_image from "./images/container.jpg";
import Product from "./Product";
import Product_image1 from "./images/img1.jpg";
import Product_image2 from "./images/img2.jpg";
import Product_image3 from "./images/img3.jpg";
import Product_image4 from "./images/img4.jpg";
import Product_image5 from "./images/img5.jpg";
import Product_image6 from "./images/img6.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home__image" src={home_image} alt="" />
        <div className="home__row">
          <Product
            id="1"
            title="Lorem ipsum dolor sit amet, consectetur adipis"
            image={Product_image1}
            price={11.99}
            rating={3}
          />
          <Product
            id="2"
            title="Lorem ipsum dolor sit amet, consectetur adipis"
            image={Product_image2}
            price={11.99}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Lorem ipsum dolor sit amet, consectetur adipis"
            image={Product_image3}
            price={11.99}
            rating={3}
          />
          <Product
            id="4"
            title="Lorem ipsum dolor sit amet, consectetur adipis"
            image={Product_image4}
            price={11.99}
            rating={2}
          />
          <Product
            id="5"
            title="Lorem ipsum dolor sit amet, consectetur adipis"
            image={Product_image5}
            price={11.99}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Lorem ipsum dolor sit amet, consectetur adipis"
            image={Product_image6}
            price={11.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
