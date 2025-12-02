import React from 'react';
import { ArrowRight } from 'lucide-react';

const SummerPromo = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4 lg:p-12 font-sans">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* LEFT COLUMN: Text Content */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] text-neutral-900">
                        Together, let’s make this <br />
                        summer <br />
                        unforgettable! <br />
                        <span className="text-neutral-400">with ultimate</span> <br />
                        <span className="text-neutral-400">summer party</span> <br />
                        <span className="text-neutral-400">experience!</span>
                    </h1>

                    <p className="text-sm text-neutral-500 max-w-xs leading-relaxed">
                        Our passion for creating colorful and energetic summer parties means
                        every event is a masterpiece of fun. Get ready for a season filled
                        with vivid memories and vibrant celebrations.
                    </p>

                    <button className="group flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-full w-fit mt-2 hover:bg-neutral-800 transition-colors">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* RIGHT COLUMN: The Dark Container */}
                <div className="lg:col-span-8 w-full">
                    <div className="bg-[#111111] rounded-[40px] p-8 md:p-12 relative">

                        {/* Carousel Container 
                - Removed 'items-center' to prevent vertical floating issues
                - lg:-ml-24: Pulls layout left for overlap effect
            */}
                        <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar snap-x lg:-ml-24 lg:w-[calc(100%+6rem)]">

                            {/* CARD 1: The UI Card (Mint Green) */}
                            <div className="min-w-[280px] md:min-w-[300px] h-[280px] bg-[#E3F2E6] rounded-3xl p-5 flex flex-col justify-between relative shrink-0 snap-center transform hover:-translate-y-2 transition-transform duration-300 shadow-2xl">
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="flex gap-2 items-center scale-90 origin-left">
                                            <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
                                            <div className="w-10 h-[1px] bg-neutral-300"></div>
                                            <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
                                            <div className="w-10 h-[1px] bg-neutral-300"></div>
                                            <div className="w-2 h-2 rounded-full bg-neutral-300"></div>
                                        </div>
                                        <span className="text-[10px] font-medium text-neutral-500 cursor-pointer hover:text-neutral-900">Join &gt;</span>
                                    </div>

                                    <div className="flex -space-x-3 mb-4">
                                        <img className="w-8 h-8 rounded-full border-2 border-[#E3F2E6]" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Avatar" />
                                        <img className="w-8 h-8 rounded-full border-2 border-[#E3F2E6]" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Avatar" />
                                        <img className="w-8 h-8 rounded-full border-2 border-[#E3F2E6]" src="https://randomuser.me/api/portraits/women/12.jpg" alt="Avatar" />
                                    </div>
                                </div>

                                <div>
                                    <p className="text-[10px] text-neutral-500 mb-2">Plan start from 26 December, 2024</p>
                                    <h3 className="text-2xl font-medium text-neutral-800 leading-tight">
                                        Run 2.5 km <br />
                                        with expert team
                                        <span className="inline-block ml-2 opacity-50">〰️</span>
                                    </h3>
                                </div>
                            </div>

                            {/* CARD 2: Party Image (Cleaned URL) */}
                            <div className="min-w-[220px] md:min-w-[240px] h-[280px] rounded-3xl overflow-hidden shrink-0 snap-center transform hover:-translate-y-2 transition-transform duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1761585501103-94949ce68281?q=80&w=1000&auto=format&fit=crop"
                                    alt="Summer Vibes"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            {/* CARD 3: Birthday Image (Cleaned URL) */}
                            <div className="min-w-[220px] md:min-w-[240px] h-[280px] rounded-3xl overflow-hidden shrink-0 snap-center transform hover:-translate-y-2 transition-transform duration-300">
                                <img
                                    src="https://images.unsplash.com/photo-1758275557553-0c46c061d43e?q=80&w=1000&auto=format&fit=crop"
                                    alt="Birthday Celebration"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                        </div>

                        {/* Footer inside the dark container */}
                        <div className="flex justify-between items-end mt-4 text-white/50 border-t border-white/10 pt-6">
                            <div>
                                <span className="text-white text-sm font-medium block mb-1">Summer events</span>
                                <span className="text-xs">2 / 30</span>
                            </div>

                            <div className="flex gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
};

export default SummerPromo;