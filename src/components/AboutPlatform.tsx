import React from 'react';
import { Search, CreditCard, UploadCloud, Calendar, MapPin, Check, Plus, BarChart3, Ticket } from 'lucide-react';

const AboutPlatform = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-white font-sans py-24 px-4 lg:px-12 flex items-center justify-center">
            <div className="max-w-7xl w-full">

                {/* Header */}
                <div className="mb-20 text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-neutral-300 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        About The Platform
                    </div>
                    <h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-6 text-white">
                        Ticketing, <span className="text-neutral-500">simplified.</span>
                    </h1>
                    <p className="text-neutral-400 text-lg leading-relaxed">
                        A unified ecosystem to discover events, secure instant tickets, and host your own gatherings with complete control.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* --- CARD 1: DISCOVER (Check Events) --- */}
                    <div className="bg-neutral-900/50 border border-white/10 rounded-[32px] p-8 flex flex-col hover:border-white/20 transition-colors group">
                        <div className="mb-8">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                                <Search size={24} />
                            </div>
                            <h3 className="text-2xl font-medium mb-3">Discover Events</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Browse a live feed of concerts, workshops, and parties. Filter by location and availability instantly.
                            </p>
                        </div>

                        {/* UI Mockup: Event List */}
                        <div className="mt-auto bg-neutral-900 rounded-xl border border-white/10 p-4 space-y-3 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-neutral-900/80 pointer-events-none z-10"></div>

                            {/* Mock Item 1 */}
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-600">
                                    <Calendar size={16} />
                                </div>
                                <div className="flex-1">
                                    <div className="h-2 w-20 bg-neutral-700 rounded mb-1.5"></div>
                                    <div className="h-1.5 w-12 bg-neutral-800 rounded"></div>
                                </div>
                                <div className="h-6 w-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <div className="h-1.5 w-6 bg-blue-500 rounded-full"></div>
                                </div>
                            </div>

                            {/* Mock Item 2 */}
                            <div className="flex items-center gap-3 p-3 rounded-lg bg-neutral-800/50 border border-white/5 opacity-60">
                                <div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-600">
                                    <MapPin size={16} />
                                </div>
                                <div className="flex-1">
                                    <div className="h-2 w-24 bg-neutral-700 rounded mb-1.5"></div>
                                    <div className="h-1.5 w-16 bg-neutral-800 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* --- CARD 2: PAY (Buy Tickets) --- */}
                    <div className="bg-neutral-900/50 border border-white/10 rounded-[32px] p-8 flex flex-col hover:border-white/20 transition-colors group">
                        <div className="mb-8">
                            <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 mb-6">
                                <CreditCard size={24} />
                            </div>
                            <h3 className="text-2xl font-medium mb-3">Instant Purchase</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Seamless payments with immediate digital ticket generation. No waiting lists, no hassle.
                            </p>
                        </div>

                        {/* UI Mockup: Ticket Stub */}
                        <div className="mt-auto relative h-40 flex items-center justify-center">
                            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full opacity-20"></div>

                            <div className="relative w-full max-w-[240px] bg-white text-neutral-900 rounded-2xl p-4 shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                {/* Perforated Line Effect */}
                                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-900 rounded-full"></div>
                                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-neutral-900 rounded-full"></div>

                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">Admit One</div>
                                        <div className="text-lg font-bold">VIP Access</div>
                                    </div>
                                    <Ticket className="text-neutral-300" size={20} />
                                </div>

                                <div className="border-t-2 border-dashed border-neutral-200 my-3"></div>

                                <div className="flex justify-between items-center">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4].map(i => <div key={i} className="w-1 h-6 bg-neutral-900 rounded-sm"></div>)}
                                    </div>
                                    <div className="bg-green-100 text-green-700 px-2 py-1 rounded text-[10px] font-bold flex items-center gap-1">
                                        <Check size={10} /> PAID
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* --- CARD 3: UPLOAD (Host Events) --- */}
                    <div className="bg-neutral-900/50 border border-white/10 rounded-[32px] p-8 flex flex-col hover:border-white/20 transition-colors group">
                        <div className="mb-8">
                            <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500 mb-6">
                                <UploadCloud size={24} />
                            </div>
                            <h3 className="text-2xl font-medium mb-3">Host & Monetize</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                Upload your event details and set ticket quantities. Manage capacity and track sales in real-time.
                            </p>
                        </div>

                        {/* UI Mockup: Upload & Stats */}
                        <div className="mt-auto bg-neutral-900 rounded-xl border border-white/10 p-5 space-y-4">
                            {/* Upload Zone */}
                            <div className="border-2 border-dashed border-neutral-700 rounded-lg h-16 flex items-center justify-center gap-2 text-neutral-500 group-hover:border-purple-500/30 group-hover:text-purple-400 transition-colors">
                                <Plus size={16} />
                                <span className="text-xs font-medium">Add Event</span>
                            </div>

                            {/* Stats Row */}
                            <div className="flex gap-3">
                                <div className="flex-1 bg-neutral-800 rounded-lg p-3">
                                    <div className="text-[10px] text-neutral-400 mb-1">Total Tickets</div>
                                    <div className="text-lg font-medium text-white">1,500</div>
                                </div>
                                <div className="flex-1 bg-neutral-800 rounded-lg p-3 relative overflow-hidden">
                                    <div className="text-[10px] text-neutral-400 mb-1">Sold</div>
                                    <div className="text-lg font-medium text-purple-400">84%</div>
                                    {/* Tiny Bar Chart */}
                                    <div className="absolute bottom-0 right-0 flex items-end gap-0.5 p-2 opacity-30">
                                        <div className="w-1 h-3 bg-purple-500"></div>
                                        <div className="w-1 h-5 bg-purple-500"></div>
                                        <div className="w-1 h-4 bg-purple-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

// --- MAIN APP COMPONENT ---
const App = () => {
    return (
        <div className="w-full">
            <AboutPlatform />
        </div>
    );
};

export default App;