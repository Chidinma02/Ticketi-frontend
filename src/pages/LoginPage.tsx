import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [form, setForm] = useState({ email: "", password: "" });

    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/login", form);
            localStorage.setItem("token", res.data.token);

            alert("Login successful!");
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            alert("Login failed!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-xl font-bold mb-4">Login</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded"
                />
                <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                    Login
                </button>
            </form>
        </div>
    );
}
