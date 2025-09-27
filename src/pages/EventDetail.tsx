import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EventDetail: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Strongly type form state
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: "",
        quantity: 1,
    });

    // Correct typing for input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setForm({
            ...form,
            [name]: name === "quantity" ? Number(value) : value, // quantity should be number
        });
    };

    // Correct typing for submit
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await axios.post(`http://127.0.0.1:8000/api/events/${id}/order`, form);
        navigate("/thank-you");
    };

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Register for Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                <input
                    type="number"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                // min="1"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Get Ticket
                </button>
            </form>
        </div>
    );
};

export default EventDetail;
