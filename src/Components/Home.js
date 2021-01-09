import React from "react";
import "./Styles/Home.css";
import Product from './Product'

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
        <Product id = "1" title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)" price = {549} rating = {5} image = "https://images-eu.ssl-images-amazon.com/images/I/41xg1z2h-uL._AC_US160_FMwebp_QL70_.jpg" />
        <Product id = "2" title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)" price = {699} rating = {5} image = "https://images-na.ssl-images-amazon.com/images/I/71UqqpGVheL._SX679_.jpg" />
        </div>


        <div className="home__row">
        <Product id = "3" title="Rangriti
Women's Silk A-Line Dress" price = {999} rating = {4} image = "https://m.media-amazon.com/images/I/81TC1g466xL._AC_UL320_.jpg" />
     
        <Product id = "4" title="Chill Winston Men's Regular Fit Kurta" price = {1199} rating = {5} image = "https://images-eu.ssl-images-amazon.com/images/I/31vzXYSPcdL._AC_UL260_SR200,260_FMwebp_QL70_.jpg" />
        <Product id = "5" title="Women's Rayon Anarkali Kurta With Gold Printed Dupatta" price = {699} rating = {3} image = "https://m.media-amazon.com/images/I/61GbRFutDjL._AC_UL320_.jpg" />
        </div>

        
        <div className="home__row">
        <Product id = "6" title="Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)" price = {11999} rating = {5} image = "https://images-eu.ssl-images-amazon.com/images/I/41xg1z2h-uL._AC_US160_FMwebp_QL70_.jpg" />
        </div>

      </div>
    </div>
    );
};

export default Home;