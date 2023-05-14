import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import QuoteCard from './QuoteCard';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};



const PersonQuote = () => {
  return (
        <>
        <div className="w-100% flex flex-wrap mb-10">
            <div className="w-11/12 md:w-[1170px] h-[453px] m-auto bg-[#f6f6f6] my-10">
            <Carousel
                renderArrowPrev={false}
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                itemClass="carousel-item-padding-40-px"
                >

                    
                    <QuoteCard 
                    perName={"KATHAY YOUNG"}
                    cardImg={"http://ginza.mallthemes.com/wp-content/uploads/2018/04/testimonial2-150x150.jpg"}
                    />
                    <QuoteCard 
                    perName={"Jenifer Brown"}
                    cardImg={"http://ginza.mallthemes.com/wp-content/uploads/2018/04/testimonial3-150x150.jpg"}
                    />
                    <QuoteCard 
                    perName={"John Sullivan"}
                    cardImg={"http://ginza.mallthemes.com/wp-content/uploads/2018/04/testimonial1-150x150.jpg"}
                    />
                      
                    
                    </Carousel>
            </div>
        </div>
        </>

  )
}

export default PersonQuote




