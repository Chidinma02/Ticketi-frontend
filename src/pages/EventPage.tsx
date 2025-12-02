import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, CalendarDays, Filter } from 'lucide-react';
import EventCard from '../components/EventCard';
import { motion } from "framer-motion";

// ---------------------- CATEGORY FILTER ----------------------
const CategoryFilter = ({ selected, onSelect }) => {
    const categories = ["All", "Music", "Tech", "Arts", "Business", "Sports", "Wellness"];

    return (
        <div className="flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
            {categories.map((cat, idx) => (
                <button
                    key={idx}
                    onClick={() => onSelect(cat)}
                    className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all 
                        ${selected === cat
                            ? "bg-black text-white shadow-md"
                            : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-black"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

// ---------------------- MAIN EVENT PAGE ----------------------
const EventPage = () => {
    const [eventList, setEventList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("All");

    // Mock fallback (optional)
    const mockEvents = [];

    // Fetch events
    const getEvents = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/events');
            if (response.data && Array.isArray(response.data)) {
                setEventList(response.data);
            }
        } catch (error) {
            console.log("Network error → using mock data");
            setEventList(mockEvents);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getEvents();
    }, []);

    // ---------- FILTERING ----------
    const filteredEvents = eventList.filter((event) => {
        const matchesSearch =
            event.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.venue?.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            event.category?.toLowerCase() === selectedCategory.toLowerCase();

        return matchesSearch && matchesCategory;
    });

    // ------------------- UI -------------------
    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-900 mt-20">
            {/* SEARCH + HERO */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                        Discover Amazing Events
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
                        Find the best parties, concerts, and workshops happening near you.
                    </p>

                    <div className="mt-8 max-w-lg mx-auto relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-11 pr-4 py-4 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition duration-150 ease-in-out shadow-sm text-sm"
                            placeholder="Search events, venues..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* CATEGORY FILTER */}
                <div className="mb-10">
                    <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        <Filter size={14} /> Filter by Category
                    </div>

                    {/* pass props */}
                    <CategoryFilter
                        selected={selectedCategory}
                        onSelect={setSelectedCategory}
                    />
                </div>

                {/* LOADING STATE */}
                {loading && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl h-80 animate-pulse border border-gray-100 shadow-sm flex flex-col">
                                <div className="h-48 bg-gray-200 w-full"></div>
                                <div className="p-4 space-y-3">
                                    <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
                                    <div className="h-4 bg-gray-200 w-1/2 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* EVENTS GRID */}
                {!loading && filteredEvents.length > 0 && (
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredEvents.map((event, idx) => (
                            <EventCard key={idx} {...event} />
                        ))}
                    </section>
                )}

                {/* EMPTY STATE */}
                {!loading && filteredEvents.length === 0 && (
                    <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4">
                            <CalendarDays className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">No events found</h3>
                        <p className="mt-1 text-gray-500">Try adjusting your search terms or filters.</p>
                    </div>
                )}
            </main>

            {/* Hide Scrollbar */}
            <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default EventPage;
