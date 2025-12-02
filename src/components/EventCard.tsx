import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, CalendarDays, MapPin, Calendar, Tag, Filter, Ticket } from 'lucide-react';


const EventCard = ({ id, title, date, price, image, venue, category, total_tickets, sold_tickets }) => {
    // Logic for Sold Out:
    const isSoldOut = total_tickets === 0 || (total_tickets > 0 && sold_tickets >= total_tickets);

    // Calculate remaining tickets
    const remaining = Math.max(0, total_tickets - sold_tickets);

    // Format Date safely
    const formattedDate = date ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }) : 'TBD';

    // Format Price safely
    const formatCurrency = (amount) => {
        if (!amount || amount === '0') return 'Free';
        const num = parseFloat(amount);
        if (isNaN(num)) return 'Free';

        return new Intl.NumberFormat('en-NG', {
            style: 'currency',
            currency: 'NGN',
            minimumFractionDigits: 0
        }).format(num);
    };

    // Handle Image Source
    const getImageUrl = (img) => {
        if (!img) return "https://via.placeholder.com/400x300?text=No+Image";
        if (img.startsWith('http')) return img;
        return `http://127.0.0.1:8000/${img}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, amount: 0.1 }}
            className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col h-full relative ${!isSoldOut ? 'hover:shadow-xl cursor-pointer' : ''}`}
        >
            {/* Using <a> tag. If sold out, we remove the href so it's not clickable. */}
            <a
                href={isSoldOut ? undefined : `/events/${id}`}
                className={`block h-full flex flex-col ${isSoldOut ? 'cursor-default pointer-events-none' : ''}`}
                onClick={(e) => isSoldOut && e.preventDefault()}
            >

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gray-100">
                    <img
                        src={getImageUrl(image)}
                        alt={title || "Event"}
                        className={`w-full h-full object-cover transition-transform duration-500 ${isSoldOut ? 'grayscale opacity-80' : 'group-hover:scale-105'}`}
                        loading="lazy"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/400x300?text=Event";
                        }}
                    />

                    {/* Category Badge */}
                    {category && (
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wide flex items-center gap-1 shadow-sm">
                            <Tag size={10} /> {category}
                        </div>
                    )}

                    {/* Sold Out Overlay Badge */}
                    {isSoldOut && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
                            <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold uppercase tracking-widest text-sm shadow-lg rotate-[-5deg] border-2 border-white">
                                Sold Out
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col">
                    <div className="flex-1">
                        {/* Title */}
                        <h3 className={`text-lg font-bold mb-2 line-clamp-1 transition-colors ${isSoldOut ? 'text-gray-500' : 'text-black group-hover:text-gray-600'}`}>
                            {title}
                        </h3>

                        {/* Meta Details */}
                        <div className="space-y-2 text-sm text-gray-500 mb-4">
                            <div className="flex items-center gap-2">
                                <Calendar size={14} className="text-gray-400" />
                                <span>{formattedDate}</span>
                            </div>
                            {venue && (
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} className="text-gray-400" />
                                    <span className="line-clamp-1">{venue}</span>
                                </div>
                            )}
                            {/* Ticket Status Indicator */}
                            <div className="flex items-center gap-2 text-xs font-medium">
                                <Ticket size={14} className={isSoldOut ? "text-red-400" : "text-green-500"} />
                                {isSoldOut ? (
                                    <span className="text-red-500">Tickets Unavailable</span>
                                ) : (
                                    <span className="text-green-600">{remaining > 0 ? `${remaining} tickets left` : 'Available'}</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Price / Footer */}
                    <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center gap-3">
                        <div className="flex flex-col">
                            <span className="text-xs font-medium text-gray-400">Price</span>
                            <span className="text-lg font-bold text-black">
                                {formatCurrency(price)}
                            </span>
                        </div>

                        {/* Buy Now Button */}
                        <button
                            disabled={isSoldOut}
                            className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all shadow-sm flex-1 max-w-[140px]
                                ${isSoldOut
                                    ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
                                    : "bg-black text-white hover:bg-neutral-800 hover:shadow-md active:scale-95"
                                }
                            `}
                        >
                            {isSoldOut ? "Sold Out" : "Buy Now"}
                        </button>
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

export default EventCard;