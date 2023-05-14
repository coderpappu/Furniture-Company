import { AiFillPlayCircle } from "react-icons/ai";

const SecOffer = ({ cyber, OfferPer,OfferPer2, backImgStyle }) => {
  const backgroundImageStyle = {
    backgroundImage: `url("${backImgStyle}")`,
    backgroundSize: "Cover",
  };

  return (
    <>
      <div className="m-4 w-100% m-auto mt-8 flex flex-wrap">
        <div
          className=" bg-center bg-no-repeat w-[450px] h-[270px] px-[30px] py-[40px] md:w-[640px] md:h-[303px] md:px-[50px] md:py-[40px]"
          style={backgroundImageStyle}
        >
          <div className="p-5">
            <h1 className='text-xl leading-[26px] font-["Poppins"]'>{cyber}</h1>

            <h1 className='text-[40px] leading-[36px] font-medium mt-2 font-["Poppins"]'>
              {OfferPer}
            </h1>
            <h1 className='text-[40px] leading-[36px] font-medium mt-2 font-["Poppins"]'>
              {OfferPer2}
            </h1>
            <div className="mt-10">
              <a
                href="#"
                className='float-left text-lg text-zinc-400  font-["Poppins"] mr-3'
              >
                View collection
              </a>
              <div className="pt-[6px] ">
              <AiFillPlayCircle className="text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecOffer;
