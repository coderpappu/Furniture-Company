
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

const FeaProduct = () => {
  return (
    
    <>
    
      <div className="w-100% flex flex-wrap mb-10">
        <div className="w-11/12 md:w-[1180px] m-auto border-t-[1px] border-slate-200">
          <div className="w-100%  py-5">
            <h2 className="text-2xl font-medium font-['Poppins']">Featured Products</h2>
          </div>

                <Carousel
                renderArrowPrev
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={[]}
                itemClass="carousel-item-padding-40-px"
                >
                  
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
                "http://ginza.mallthemes.com/wp-content/uploads/2019/01/product11-300x400.jpg"
              }
              proImg2={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product11-1-300x400.jpg"}
              proDetails={"Fusce ultricies  dolor vitae tristique suscipit"}
              proPrice={"$90.00 "}
            />
            <ProductCard
              proImg={
                "http://ginza.mallthemes.com/wp-content/uploads/2019/01/product15-300x400.jpg"
              }
              proImg2={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product15-1-300x400.jpg"}
              proDetails={"Aliquam lobortis pellentesque nisi lectus"}
              proPrice={"$75.00 - $85.00 "}
            />
            <ProductCard
              proImg={
                "http://ginza.mallthemes.com/wp-content/uploads/2019/01/product04-300x400.jpg"
              }
              proImg2 ={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product04-1-300x400.jpg"}
              proDetails={"Nostrum exercitationem itae neque nulla nec posuere sem"}
              proPrice={"$86.00 "}
            />
            </Carousel>
                

          
        </div>
      </div>
    </>
  );
};

export default FeaProduct;
