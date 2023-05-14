import React from "react";
import ProductCard from "../Product/ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const LatestArr = () => {
  return (
    <>
      <div className="w-100% flex flex-wrap mb-10">
        <div className=" w-11/12 md:w-[1180px] m-auto border-t-[1px] border-slate-200">
          <div className="w-100%  py-5">
            <h2 className="text-2xl font-medium font-['Poppins']">
              Latest Arrivals{" "}
            </h2>
          </div>

          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            itemClass="carousel-item-padding-40-px"
          >
            <ProductCard
              proImg={
                "http://ginza.mallthemes.com/wp-content/uploads/2019/01/product02-300x400.jpg"
              }
              proImg2={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product02-1-300x400.jpg"}
              proDetails={"Duis pulvinar obortis eleifend elementum"}
              proPrice={"$84.00 "}
            />
            <ProductCard
              proImg={
                "http://ginza.mallthemes.com/wp-content/uploads/2019/01/product03-300x400.jpg"
              }
              proImg2={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product03-1-300x400.jpg"}
              proDetails={"Fusce ultricies  dolor vitae tristique suscipit"}
              proPrice={"$90.00 "}
            />
            <ProductCard
            proImg = {"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product01-300x400.jpg"}
            proImg2={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product01-1-300x400.jpg"}
            proDetails = {"Mirum est Notare Tellus eu nibh iaculis pretium"}
            proPrice ={"$75.00 "}
          />
          <ProductCard
              proImg={
                "http://ginza.mallthemes.com/wp-content/uploads/2019/01/product14-300x400.jpg"
              
              }
              proImg2={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product14-1-300x400.jpg"}
              proDetails={"Duis pulvinar obortis eleifend elementum"}
              proPrice={"$84.00 "}
            />


            <ProductCard
              proImg={
                "http://ginza.mallthemes.com/wp-content/uploads/2019/01/product05-300x400.jpg"
              }
              proImg2={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product05-1-300x400.jpg"}
              proDetails={"Mirum est Notare Tellus eu nibh iaculis pretium"}
              proPrice={"$75.00 "}
            />


            <ProductCard 
            proImg = {"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product09-300x400.jpg"}
            proImg2={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product09-1-300x400.jpg"}
            proDetails = {"Pellentesque ultricies suscipit est in sapien hendrerit"}
            proPrice ={"$85.00 "}
          />
          <ProductCard 
            proImg = {"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product06-1-300x400.jpg"}
            proImg2 ={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product06-300x400.jpg"}
            proDetails = {"Eodem modo vel mattis ante facilisis nec porttitor  efficitur"}
            proPrice ={"$86.00 "}
          />
          <ProductCard 
            proImg = {"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product08-300x400.jpg"}
            proImg2 ={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product08-1-300x400.jpg"}
            proDetails = {"Tincidunt malesuada tempor euismod mi et"}
            proPrice ={"$50.00 "}
          />
          <ProductCard 
            proImg = {"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product07-300x400.jpg"}
            proImg2 ={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product07-1-300x400.jpg"}
            proDetails = {"Pellentesque posuere hendrerit dui quis urna"}
            proPrice ={"$45.00 "}
          />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default LatestArr;
