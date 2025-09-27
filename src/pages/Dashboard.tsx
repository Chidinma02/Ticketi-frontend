import React from 'react'
import axios from "axios";
import { useState } from "react";

const Dashboard = () => {
    const [form, setForm] = useState({
        title: "",
        description: "",
        venue: "",
        date: "",
        category: "",
        price: "",
        total_tickets: "",
        image: null as File | null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setForm({ ...form, image: e.target.files[0] });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const token = localStorage.getItem("token"); // saved on login
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (value !== null) {
                formData.append(key, value as string | Blob);
            }
        });

        await axios.post("http://127.0.0.1:8000/api/events", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            },
        });

        alert("Event created successfully!");
    };

    return (
        <>
            <div>Dashboard</div>

            <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded-lg">
                <h2 className="text-xl font-bold mb-4">Create Event</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" name="title" placeholder="Event Title"
                        onChange={handleChange} className="w-full border p-2 rounded" />
                    <textarea name="description" placeholder="Description"
                        onChange={handleChange} className="w-full border p-2 rounded"></textarea>
                    <input type="text" name="venue" placeholder="Venue"
                        onChange={handleChange} className="w-full border p-2 rounded" />
                    <input type="date" name="date" onChange={handleChange}
                        className="w-full border p-2 rounded" />
                    <input type="text" name="category" placeholder="Category"
                        onChange={handleChange} className="w-full border p-2 rounded" />
                    <input type="number" name="price" placeholder="Ticket Price"
                        onChange={handleChange} className="w-full border p-2 rounded" />
                    <input type="number" name="total_tickets" placeholder="Total Tickets"
                        onChange={handleChange} className="w-full border p-2 rounded" />
                    <input type="file" name="image" onChange={handleFileChange}
                        className="w-full border p-2 rounded" />
                    <button type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                        Create Event
                    </button>
                </form>
            </div>

        </>
    )
}

export default Dashboard