import { AiFillPlayCircle } from "react-icons/ai";

const Offer = ({ cyber, OfferPer, backImgStyle }) => {
    const backgroundImageStyle = {
        backgroundImage: `url("${backImgStyle}")`,
        backgroundSize: "Cover",
    };

    return (
        <>
            <div className="m-4 mt-8 flex flex-wrap">
                <div
                    className=" bg-center bg-no-repeat w-[450px] h-[240px] px-[30px] py-[30px] md:w-[415px] md:h-[230px]"
                    style={backgroundImageStyle}
                >
                    <div className="p-5">
                        <h1 className='text-xl font-["Poppins"]'>{cyber}</h1>

                        <h1 className='text-2xl font-medium mt-2 font-["Poppins"]'>
                            {OfferPer}
                        </h1>
                        <div className="mt-6">
                            <a
                                href="#"
                                className='float-left text-sm text-zinc-400  font-["Poppins"] mr-1'
                            >
                                View collection
                            </a>
                            <AiFillPlayCircle className="text-red-500 w-4 mt-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Offer;
