import { motion } from "framer-motion";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();

    return (
        <div className="relative h-[90vh] flex items-center justify-center bg-[#FFFFFF] text-white">

            <div className="relative z-10 text-center px-2 sm:px-6  lg:pl-60 lg:pr-60">

                <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-6 text-black">
                    Discover exciting
                </h1>
                <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-6 text-black">
                    events happening around you.
                </h1>
                <p className="mb-6 sm:mb-8 text-base sm:text-lg text-black">
                    from lively parties and amazing concerts to unforgettable festivals.
                </p>


                <div className="lg:pl-40 lg:pr-40 mt-10">
                    <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
                        <div className="flex items-center border border-gray-400 rounded-full px-4 py-2 flex-1">
                            {/* Icon */}
                            <PaperAirplaneIcon className="h-5 w-5 text-gray-500 mr-2" />
                            {/* Input */}
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-1 outline-none text-gray-700 placeholder-gray-500"
                            />
                        </div>
                        {/* Button */}
                        <button onClick={() => navigate("/signup")} className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                            Sign Up
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Hero;
