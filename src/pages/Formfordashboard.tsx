import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
// FIXED: Added 'ArrowUpRight' to the imports
import {
    Calendar, MapPin, Tag, DollarSign, Hash, Type, FileText, Image as ImageIcon,
    ArrowLeft, CheckCircle, Loader2, ArrowUpRight
} from 'lucide-react';

const CreateEvent = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: "",
        venue: "",
        date: "",
        category: "",
        price: "",
        total_tickets: "",
        image: null,
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        // Clear error when user types
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setForm({ ...form, image: file });
            setImagePreview(URL.createObjectURL(file));
            if (errors.image) {
                setErrors({ ...errors, image: null });
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setIsSubmitting(true);

        const token = localStorage.getItem("token");
        const formData = new FormData();
        Object.entries(form).forEach(([key, value]) => {
            if (value !== null) {
                formData.append(key, value);
            }
        });

        try {
            await axios.post("http://127.0.0.1:8000/api/events", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            setShowModal(true);
            setForm({
                title: "",
                description: "",
                venue: "",
                date: "",
                category: "",
                price: "",
                total_tickets: "",
                image: null,
            });
            setImagePreview(null);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                alert("Something went wrong! Please try again.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans py-12 px-4 sm:px-6 lg:px-8 flex justify-center">
            <div className="max-w-3xl w-full">

                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center text-sm font-medium text-gray-500 hover:text-black transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" /> Back to Dashboard
                    </button>
                </div>

                <div className="bg-white rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                    <div className="p-8 md:p-12">
                        <div className="mb-8">
                            <h1 className="text-3xl font-black text-gray-900 tracking-tight mb-2">Create New Event</h1>
                            <p className="text-gray-500">Fill in the details below to launch your event page.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Image Upload */}
                            <div className="w-full">
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Event Banner</label>
                                <div className={`relative w-full h-64 bg-gray-50 border-2 border-dashed ${errors.image ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-black'} rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all group overflow-hidden`}>
                                    {imagePreview ? (
                                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="flex flex-col items-center text-gray-400 group-hover:text-gray-600">
                                            <ImageIcon size={48} className="mb-2" />
                                            <span className="text-sm font-medium">Click to upload image</span>
                                            <span className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (MAX. 2MB)</span>
                                        </div>
                                    )}
                                    <input
                                        type="file"
                                        name="image"
                                        onChange={handleFileChange}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        accept="image/*"
                                    />
                                </div>
                                {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image[0]}</p>}
                            </div>

                            {/* Title & Category */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Event Title</label>
                                    <div className="relative">
                                        <Type className="absolute left-4 top-3.5 text-gray-400" size={18} />
                                        <input
                                            type="text" name="title" placeholder="e.g. Summer Tech Fest"
                                            value={form.title} onChange={handleChange}
                                            className={`w-full pl-11 pr-4 py-3 bg-gray-50 border ${errors.title ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-black'} rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all text-sm font-medium`}
                                        />
                                    </div>
                                    {errors.title && <p className="text-red-500 text-xs">{errors.title[0]}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
                                    <div className="relative">
                                        <Tag className="absolute left-4 top-3.5 text-gray-400" size={18} />
                                        <input
                                            type="text" name="category" placeholder="e.g. Music, Tech"
                                            value={form.category} onChange={handleChange}
                                            className={`w-full pl-11 pr-4 py-3 bg-gray-50 border ${errors.category ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-black'} rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all text-sm font-medium`}
                                        />
                                    </div>
                                    {errors.category && <p className="text-red-500 text-xs">{errors.category[0]}</p>}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-1">
                                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Description</label>
                                <div className="relative">
                                    <FileText className="absolute left-4 top-3.5 text-gray-400" size={18} />
                                    <textarea
                                        name="description" placeholder="Tell people what your event is about..."
                                        value={form.description} onChange={handleChange} rows="4"
                                        className={`w-full pl-11 pr-4 py-3 bg-gray-50 border ${errors.description ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-black'} rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all text-sm font-medium resize-none`}
                                    ></textarea>
                                </div>
                                {errors.description && <p className="text-red-500 text-xs">{errors.description[0]}</p>}
                            </div>

                            {/* Venue & Date */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Venue</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-3.5 text-gray-400" size={18} />
                                        <input
                                            type="text" name="venue" placeholder="e.g. Eko Hotel & Suites"
                                            value={form.venue} onChange={handleChange}
                                            className={`w-full pl-11 pr-4 py-3 bg-gray-50 border ${errors.venue ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-black'} rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all text-sm font-medium`}
                                        />
                                    </div>
                                    {errors.venue && <p className="text-red-500 text-xs">{errors.venue[0]}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Date & Time</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-3.5 text-gray-400" size={18} />
                                        <input
                                            type="date" name="date"
                                            value={form.date} onChange={handleChange}
                                            className={`w-full pl-11 pr-4 py-3 bg-gray-50 border ${errors.date ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-black'} rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all text-sm font-medium text-gray-600`}
                                        />
                                    </div>
                                    {errors.date && <p className="text-red-500 text-xs">{errors.date[0]}</p>}
                                </div>
                            </div>

                            {/* Price & Tickets */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Ticket Price</label>
                                    <div className="relative">
                                        <DollarSign className="absolute left-4 top-3.5 text-gray-400" size={18} />
                                        <input
                                            type="number" name="price" placeholder="0.00"
                                            value={form.price} onChange={handleChange}
                                            className={`w-full pl-11 pr-4 py-3 bg-gray-50 border ${errors.price ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-black'} rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all text-sm font-medium`}
                                        />
                                    </div>
                                    {errors.price && <p className="text-red-500 text-xs">{errors.price[0]}</p>}
                                </div>

                                <div className="space-y-1">
                                    <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Total Tickets</label>
                                    <div className="relative">
                                        <Hash className="absolute left-4 top-3.5 text-gray-400" size={18} />
                                        <input
                                            type="number" name="total_tickets" placeholder="e.g. 100"
                                            value={form.total_tickets} onChange={handleChange}
                                            className={`w-full pl-11 pr-4 py-3 bg-gray-50 border ${errors.total_tickets ? 'border-red-300 focus:ring-red-200' : 'border-gray-200 focus:ring-black'} rounded-xl focus:outline-none focus:ring-2 focus:bg-white transition-all text-sm font-medium`}
                                        />
                                    </div>
                                    {errors.total_tickets && <p className="text-red-500 text-xs">{errors.total_tickets[0]}</p>}
                                </div>
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-neutral-800 active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>Creating... <Loader2 className="animate-spin" size={20} /></>
                                    ) : (
                                        <>Create Event <ArrowUpRight size={20} /></>
                                    )}
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center transform scale-100 transition-transform">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                            <CheckCircle size={32} />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-2">Success!</h3>
                        <p className="text-gray-500 mb-6">Your event has been created and is now live.</p>
                        <button
                            onClick={() => {
                                setShowModal(false);
                                navigate("/dashboard");
                            }}
                            className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-neutral-800 transition-colors"
                        >
                            Go to Dashboard
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CreateEvent;