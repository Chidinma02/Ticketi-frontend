import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup() {
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const navigate = useNavigate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://127.0.0.1:8000/api/register", form);
            localStorage.setItem("token", res.data.token);
            navigate('/dashboard');
            alert("Signup successful!");
        } catch (err) {
            console.error(err);
            alert("Signup failed!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-80">
                <h2 className="text-xl font-bold mb-4">Sign Up</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                    className="w-full p-2 mb-3 border rounded"
                />
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
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Sign Up
                </button>
            </form>
        </div>
    );
}
