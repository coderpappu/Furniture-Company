
import React from "react";
import DiscountApp from "./app/Components/Discount/DiscountApp";
import FeaProduct from "./app/Components/FeaProduct/FeaProduct";
import FooterApp from "./app/Components/Footer/FooterApp";
import LatestArr from "./app/Components/LatestArrival/LatestArr";
import BlogStruc from "./app/Components/LatestBlog/BlogStruc";
import Head_Menu from "./app/Components/Menu/Menu";
import Boom_Offer from "./app/Components/Offer/Boom_Offer";
import SecOfferBoom from "./app/Components/Offer/SecOfferBoom";
import PersonQuote from "./app/Components/PersonQuote/PersonQuote";
import ProductSec from "./app/Components/Product/Product";





const App = () => {
  return (
    <>
      <Head_Menu />
      <Boom_Offer/>
      <ProductSec/>
      <FeaProduct/>
      <SecOfferBoom/>
      <LatestArr/>
      <PersonQuote/>
      <BlogStruc/>
      <DiscountApp/>
      <FooterApp/>

    </>

  )

}

export default App;
