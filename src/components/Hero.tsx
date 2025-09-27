import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div className="relative h-[90vh] flex items-center justify-center bg-black text-white">
            <img
                src="/hero.jpg"
                alt="Event Hero"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
            />
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center max-w-2xl"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Discover Amazing Events
                </h1>
                <p className="mb-8 text-lg text-gray-200">
                    Find parties, concerts, and festivals near you.
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl shadow-lg">
                    Get Tickets
                </button>
            </motion.div>
        </div>
    );
};

export default Hero;
