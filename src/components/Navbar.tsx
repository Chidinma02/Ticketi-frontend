import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md fixed w-full top-0 z-50">
            <h1 className="text-2xl font-bold text-blue-600">Ticketi</h1>
            <ul className="hidden md:flex gap-8 font-medium text-gray-700">
                <li>Home</li>
                <li>Events</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700" onClick={() => navigate("/login")}>
                Login
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700" onClick={() => navigate("/signup")}>
                Sign up
            </button>
        </nav>
    );
};

export default Navbar;
