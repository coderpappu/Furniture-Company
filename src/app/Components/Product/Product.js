import ProductCard from "./ProductCard.js";
import ProductMenu from "./ProductMenu.js";
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
    items: 3,
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

const ProductSec = () => {
  return (
    <>
      <div className="w-100% flex flex-wrap mt-12 mb-[90px]">
        <div className="w-11/12 md:w-[1170px] m-auto border-t-[1px]  border-slate-200">
            <ProductMenu/>
        <div className=" pt-8 ">
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
            proImg = {"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product01-300x400.jpg"}
            proImg2={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product01-1-300x400.jpg"}
            proDetails = {"Mirum est Notare Tellus eu nibh iaculis pretium"}
            proPrice ={"$75.00 "}
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
            proImg = {"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product06-1-300x400.jpg"}
            proImg2 ={"http://ginza.mallthemes.com/wp-content/uploads/2019/01/product06-300x400.jpg"}
            proDetails = {"Eodem modo vel mattis ante facilisis nec porttitor  efficitur"}
            proPrice ={"$86.00 "}
          />
        </Carousel>
          
        </div>
        </div>
      </div>
    </>
  );
};

export default ProductSec;
