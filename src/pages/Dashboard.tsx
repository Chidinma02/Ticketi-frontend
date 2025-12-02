import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
    Users,
    Ticket,
    CreditCard,
    Calendar,
    X,
    Plus,
    Loader2,
    Search,
    ArrowUpRight,
    TrendingUp,
    MoreHorizontal
} from "lucide-react";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [stats, setStats] = useState(null);
    const [events, setEvents] = useState([]);
    const [buyers, setBuyers] = useState([]);

    // UI States
    const [isLoading, setIsLoading] = useState(true);
    const [isBuyerLoading, setIsBuyerLoading] = useState(false);
    const [selectedEventTitle, setSelectedEventTitle] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // New state for search

    const navigate = useNavigate();

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            const token = localStorage.getItem("token");

            // Real API Call
            const res = await axios.get("http://127.0.0.1:8000/api/dashboard", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUser(res.data.user);
            setStats(res.data.stats);
            setEvents(res.data.events);

        } catch (error) {
            console.error("Error loading dashboard", error);
            // Handle error state appropriately (e.g., redirect to login if 401)
            if (error.response?.status === 401) {
                navigate("/login");
            }
        } finally {
            setIsLoading(false);
        }
    };

    const viewBuyers = async (eventId, title) => {
        setSelectedEventTitle(title);
        setBuyers([]);
        setIsModalOpen(true);
        setIsBuyerLoading(true);

        try {
            const token = localStorage.getItem("token");
            // Real API Call
            const res = await axios.get(
                `http://127.0.0.1:8000/api/events/${eventId}/buyers`,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            // Handle response structure (array vs object wrapping array)
            setBuyers(Array.isArray(res.data) ? res.data : res.data.buyers || []);
        } catch (error) {
            console.error("Error fetching buyers:", error);
        } finally {
            setIsBuyerLoading(false);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setBuyers([]);
        setSelectedEventTitle(null);
    };

    // Filter events based on search query
    const filteredEvents = events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-white">
                <Loader2 className="animate-spin h-10 w-10 text-black" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-slate-900 p-6 md:p-10 mt-20">
            <div className="max-w-7xl mx-auto">

                {/* --- HEADER SECTION --- */}
                <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-2">Overview</h1>
                        <p className="text-gray-500 font-medium text-lg">Welcome back, {user?.name || 'User'}</p>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <button className="flex-1 md:flex-none bg-white text-gray-700 px-6 py-3 rounded-xl font-bold text-sm border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm">
                            Export Data
                        </button>
                        <button
                            onClick={() => navigate("/create-event")}
                            className="flex-1 md:flex-none bg-black text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-neutral-800 transition-all shadow-lg flex items-center justify-center gap-2"
                        >
                            <Plus size={18} /> Create Event
                        </button>
                    </div>
                </header>

                {/* --- STATS GRID --- */}
                {stats && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        <StatCard
                            title="Total Revenue"
                            value={`₦${(stats.total_revenue || 0).toLocaleString()}`}
                            icon={<CreditCard size={24} className="text-white" />}
                            color="bg-black"
                            trend="+12.5%"
                        />
                        <StatCard
                            title="Tickets Sold"
                            value={stats.total_tickets_sold || 0}
                            icon={<Ticket size={24} className="text-black" />}
                            color="bg-yellow-400"
                            textColor="text-black"
                            trend="+8.2%"
                        />
                        <StatCard
                            title="Total Events"
                            value={stats.total_events || 0}
                            icon={<Calendar size={24} className="text-white" />}
                            color="bg-blue-600"
                            trend="+2 new"
                        />
                        <StatCard
                            title="Tickets Created"
                            value={stats.total_tickets_created || 0}
                            icon={<Users size={24} className="text-white" />}
                            color="bg-purple-600"
                        />
                    </div>
                )}

                {/* --- EVENTS TABLE SECTION --- */}
                <div className="bg-white rounded-[32px] shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                    <div className="p-8 border-b border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                        <h2 className="text-xl font-bold text-gray-900">Recent Events</h2>

                        {/* Search / Filter */}
                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black transition-colors" size={20} />
                            <input
                                type="text"
                                placeholder="Search events by name..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-12 pr-4 py-3 bg-gray-50 border-2 border-transparent hover:bg-gray-100 focus:bg-white focus:border-black rounded-2xl text-sm font-medium w-full transition-all outline-none"
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-50/50 text-gray-400 text-xs uppercase tracking-wider font-bold border-b border-gray-100">
                                <tr>
                                    <th className="p-6 pl-8">Event Name</th>
                                    <th className="p-6 text-center">Status</th>
                                    <th className="p-6 text-center">Sold / Total</th>
                                    <th className="p-6 w-1/4">Progress</th>
                                    <th className="p-6 pr-8 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {filteredEvents.length === 0 ? (
                                    <tr>
                                        <td className="p-12 text-center text-gray-400 font-medium" colSpan="5">
                                            {searchQuery ? "No events match your search." : "No events created yet. Start by creating one!"}
                                        </td>
                                    </tr>
                                ) : (
                                    filteredEvents.map((ev) => {
                                        const percentage = ev.total_tickets > 0 ? Math.round((ev.sold_tickets / ev.total_tickets) * 100) : 0;
                                        const isSoldOut = ev.sold_tickets >= ev.total_tickets && ev.total_tickets > 0;

                                        return (
                                            <tr key={ev.id} className="hover:bg-gray-50/80 transition-colors group">
                                                <td className="p-6 pl-8">
                                                    <p className="font-bold text-gray-900 text-base">{ev.title}</p>
                                                    <p className="text-xs text-gray-400 mt-1 font-mono">ID: #{ev.id.toString().padStart(4, '0')}</p>
                                                </td>
                                                <td className="p-6 text-center">
                                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border
                                                        ${isSoldOut
                                                            ? "bg-red-50 text-red-600 border-red-100"
                                                            : "bg-green-50 text-green-600 border-green-100"
                                                        }
                                                    `}>
                                                        {isSoldOut ? 'Sold Out' : 'Active'}
                                                    </span>
                                                </td>
                                                <td className="p-6 text-center font-medium text-gray-600">
                                                    <span className="text-gray-900 font-bold">{ev.sold_tickets}</span> <span className="text-gray-300 mx-1">/</span> {ev.total_tickets}
                                                </td>
                                                <td className="p-6 align-middle">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                                            <div
                                                                className={`h-full rounded-full transition-all duration-500 ${isSoldOut ? 'bg-red-500' : 'bg-black'}`}
                                                                style={{ width: `${percentage}%` }}
                                                            ></div>
                                                        </div>
                                                        <span className="text-xs font-bold text-gray-500 w-10">{percentage}%</span>
                                                    </div>
                                                </td>
                                                <td className="p-6 pr-8 text-right">
                                                    <button
                                                        onClick={() => viewBuyers(ev.id, ev.title)}
                                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-gray-600 hover:text-black hover:bg-gray-100 transition-all"
                                                    >
                                                        Manage <ArrowUpRight size={16} />
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* --- BUYERS MODAL (OVERLAY) --- */}
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-in fade-in duration-200">
                        <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden border border-gray-100">

                            {/* Modal Header */}
                            <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
                                <div>
                                    <h2 className="text-2xl font-black text-gray-900 tracking-tight">Guest List</h2>
                                    <p className="text-sm text-gray-500 font-medium mt-1 flex items-center gap-2">
                                        <Ticket size={14} />
                                        {selectedEventTitle}
                                    </p>
                                </div>
                                <button
                                    onClick={closeModal}
                                    className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors text-gray-500 hover:text-black"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Modal Content */}
                            <div className="overflow-y-auto p-0 bg-white flex-1">
                                {isBuyerLoading ? (
                                    <div className="flex flex-col items-center justify-center py-24 gap-4">
                                        <Loader2 className="animate-spin text-black" size={40} />
                                        <p className="text-gray-400 font-medium text-sm">Loading attendees...</p>
                                    </div>
                                ) : buyers.length > 0 ? (
                                    <table className="w-full text-left border-collapse">
                                        <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider sticky top-0">
                                            <tr>
                                                <th className="p-5 pl-8">Name</th>
                                                <th className="p-5">Email</th>
                                                <th className="p-5 text-center">Qty</th>
                                                <th className="p-5 pr-8 text-right">Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {buyers.map((buyer) => (
                                                <tr key={buyer.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="p-5 pl-8">
                                                        <div className="font-bold text-gray-900">{buyer.buyer_name}</div>
                                                    </td>
                                                    <td className="p-5 text-sm text-gray-600">{buyer.buyer_email}</td>
                                                    <td className="p-5 text-center">
                                                        <span className="inline-flex items-center justify-center bg-gray-100 text-gray-900 font-bold text-xs h-8 w-8 rounded-full">
                                                            {buyer.quantity}
                                                        </span>
                                                    </td>
                                                    <td className="p-5 pr-8 text-right text-sm text-gray-500 font-mono">
                                                        {new Date(buyer.created_at).toLocaleDateString()}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <div className="py-32 text-center flex flex-col items-center px-6">
                                        <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 text-gray-300">
                                            <Users size={40} strokeWidth={1.5} />
                                        </div>
                                        <p className="text-xl font-bold text-gray-900 mb-2">No sales yet</p>
                                        <p className="text-gray-500 text-sm max-w-xs mx-auto leading-relaxed">
                                            Your event is live but hasn't sold any tickets yet. Share your event link to get started!
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Modal Footer */}
                            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                                <button
                                    onClick={closeModal}
                                    className="px-8 py-3 bg-black text-white rounded-xl hover:bg-neutral-800 font-bold text-sm transition-all shadow-lg hover:shadow-xl active:scale-95"
                                >
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- SUB-COMPONENTS ---

const StatCard = ({ title, value, icon, color, textColor = "text-white", trend }) => (
    <div className="bg-white p-8 rounded-[24px] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
        <div className="flex justify-between items-start mb-6">
            <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            {trend && (
                <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 border border-green-100">
                    <TrendingUp size={14} /> {trend}
                </span>
            )}
        </div>
        <div>
            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">{title}</p>
            <h3 className="text-4xl font-black text-gray-900 tracking-tight">{value}</h3>
        </div>
    </div>
);

export default Dashboard;