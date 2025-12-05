import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white  fixed w-full top-0 z-50">
            {/* <h1 className="text-2xl font-extrabold text-black-600">Partynodeystop</h1> */}



            <h1>  <span className="text-sm font-semibold tracking-widest uppercase text-neutral-900">The Platform</span></h1>

            <ul className="hidden md:flex gap-8 font-bold text-black" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <li>
                    <a href="/" className="cursor-pointer hover:text-neutral-600 transition-colors">Home</a>
                </li>
                <li>
                    <a href="/event" className="cursor-pointer hover:text-neutral-600 transition-colors">Event</a>
                </li>
                <li>
                    <a href="/about" className="cursor-pointer hover:text-neutral-600 transition-colors">About Us</a>
                </li>
                <li>
                    <a href="/contact" className="cursor-pointer hover:text-neutral-600 transition-colors">Contact</a>
                </li>
            </ul>
            <div className="hidden md:flex items-center gap-4">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-700" onClick={() => navigate("/login")}>
                    Login
                </button>
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-yellow-700" onClick={() => navigate("/signup")}>
                    Sign up
                </button>
            </div>


            <div className="md:hidden flex item-center">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white  flex flex-col items-center gap-4 py-4 md:hidden">
                    <ul className="flex flex-col gap-4 font-medium text-gray-700">
                        <li>
                            <a href="/" className="cursor-pointer hover:text-neutral-600 transition-colors">Home</a>
                        </li>
                        <li>
                            <a href="/event" className="cursor-pointer hover:text-neutral-600 transition-colors">Event</a>
                        </li>
                        <li>
                            <a href="/about" className="cursor-pointer hover:text-neutral-600 transition-colors">About Us</a>
                        </li>
                        <li>
                            <a href="/contact" className="cursor-pointer hover:text-neutral-600 transition-colors">Contact</a>
                        </li>
                    </ul>
                    <div className="flex flex-col items-center gap-4">
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </button>
                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
                            onClick={() => navigate("/signup")}
                        >
                            Sign up
                        </button>
                    </div>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
