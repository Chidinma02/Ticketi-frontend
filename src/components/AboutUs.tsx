import React, { useState, useEffect } from 'react';
import {
    Check, Twitter, Instagram, Linkedin, Send,
    ArrowRight, Play, Star, Zap, Globe, Ticket,
    Calendar, Users, BarChart3, ArrowUpRight, Plus, ScanLine, LayoutGrid, ShieldCheck, Smartphone,
    PartyPopper, Music, Disc
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

// ==========================================
// SHARED COMPONENTS
// ==========================================


// ==========================================
// HOME PAGE COMPONENTS (NEW PARTY THEME)
// ==========================================

const HeroSection = () => (
    <div className="bg-white pt-36 pb-20 px-6 font-sans text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-8">
                <Disc size={14} className="animate-spin-slow" />
                All Gas. No Brakes.
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.9] mb-8">
                We handle the tech. <br />
                You start the rave.
            </h1>
            <p className="text-xl md:text-2xl text-neutral-500 font-medium max-w-2xl mx-auto">
                The ultimate toolkit for nightlife, festivals, and underground scenes.
                Register, Ticket, and Scan without killing the vibe.
            </p>
        </div>
    </div>
);


const FeatureGrid = () => {
    return (
        <div className="bg-white pb-32 px-4 lg:px-12 font-sans relative mt-30">
            <div className="max-w-7xl mx-auto">

                {/* GRID LAYOUT */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[300px]">

                    {/* 1. REGISTER (Large Card) */}
                    <div className="md:col-span-2 lg:col-span-2 row-span-2 relative group overflow-hidden rounded-[40px] bg-black">
                        <img
                            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
                            alt="DJ Crowd"
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-black">
                                <Calendar size={24} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-4xl font-black text-white mb-2 tracking-tight">Register & Publish</h3>
                            <p className="text-neutral-300 font-medium max-w-md">
                                Drop your event details, upload a sick flyer, and go live in minutes. No coding, just party.
                            </p>
                        </div>
                    </div>


                    {/* 2. SIMPLE STAT (Small Card) */}
                    <div className="bg-yellow-400 rounded-[2rem] p-8 flex flex-col justify-between border-4 border-black hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
                        <div className="flex justify-between items-start">
                            <Ticket size={32} className="text-black" />
                            <ArrowUpRight size={32} className="text-black" />
                        </div>
                        <div>
                            <div className="text-6xl font-black text-black tracking-tighter">100%</div>
                            <div className="font-bold text-black mt-1 uppercase tracking-wider">Inventory Control</div>
                        </div>
                    </div>

                    {/* 3. MANAGE TICKETS (Tall Card) */}
                    <div className="md:col-span-1 lg:col-span-1 row-span-2 bg-purple-600 rounded-[2rem] p-8 flex flex-col relative overflow-hidden group border-4 border-black hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute top-0 right-0 p-32 bg-purple-500 rounded-full blur-3xl opacity-50 -mr-16 -mt-16"></div>
                        <div className="relative z-10 flex-1 flex flex-col justify-between">
                            <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center border-2 border-white">
                                <Ticket size={28} />
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-white mb-6 leading-none uppercase tracking-tight">Ticket <br />Types</h3>
                                <ul className="space-y-4 text-white font-bold text-lg">
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div> VIP Access</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div> Early Bird</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div> Group Bundles</li>
                                    <li className="flex items-center gap-3"><div className="w-2 h-2 bg-yellow-400 rounded-full"></div> Promo Codes</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 4. VERIFY (Wide Card) */}
                    <div className="md:col-span-2 lg:col-span-2 bg-neutral-900 rounded-[2rem] p-8 relative overflow-hidden group flex items-center border-4 border-black hover:shadow-[12px_12px_0px_0px_rgba(16,185,129,1)] hover:-translate-y-1 transition-all duration-300">
                        <div className="w-1/2 pr-6 relative z-10">
                            <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mb-6 text-black shadow-[0_0_20px_rgba(34,197,94,0.5)]">
                                <ScanLine size={28} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-4xl font-black text-white mb-2 uppercase italic tracking-tighter">Scan at <br />the Door</h3>
                            <p className="text-neutral-400 font-medium text-lg mt-4">
                                Keep the line moving. Use our built-in QR scanner to verify tickets instantly.
                            </p>
                        </div>
                        <div className="absolute right-0 top-0 bottom-0 w-1/2 h-full border-l-4 border-black">
                            <img
                                src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop"
                                alt="Scanner"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-green-900/20 mix-blend-overlay"></div>
                        </div>
                    </div>

                    {/* 5. COMMUNITY (Small Card) */}
                    {/* <div className="bg-neutral-100 rounded-[2rem] p-8 flex flex-col justify-center items-center text-center border-4 border-black hover:bg-white transition-colors hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
                        <div className="flex -space-x-4 mb-6">
                            {[1, 2, 3, 4].map(i => (
                                <img key={i} src={`https://randomuser.me/api/portraits/thumb/women/${i + 10}.jpg`} className="w-12 h-12 rounded-full border-2 border-black" alt="User" />
                            ))}
                        </div>
                        <h4 className="font-black text-black text-xl uppercase tracking-tight">Know Your Crowd</h4>
                        <p className="text-sm text-neutral-500 font-bold mt-2 uppercase">Real-time Guest Lists</p>
                    </div> */}
                    <div className="bg-neutral-100 rounded-[40px] p-8 flex flex-col justify-center items-center text-center hover:bg-neutral-200 transition-colors">
                        <div className="flex -space-x-4 mb-6">
                            {/* Image 1: Woman */}
                            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="User" />
                            {/* Image 2: Man */}
                            <img src="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="User" />
                            {/* Image 3: Woman */}
                            <img src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="User" />
                            {/* Image 4: Man */}
                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&h=100" className="w-12 h-12 rounded-full border-2 border-white object-cover" alt="User" />
                        </div>
                        <h4 className="font-bold text-black text-lg">Know Your Crowd</h4>
                        <p className="text-xs text-neutral-500 font-medium mt-1">Real-time Guest Lists</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

const CtaSection = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-black py-32 px-6 text-center font-sans relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="max-w-3xl mx-auto relative z-10">
                <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                    LET'S GET <br /> LOUD.
                </h2>
                <p className="text-xl text-neutral-400 mb-12 max-w-xl mx-auto font-medium">
                    Start creating your first event today. No credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => navigate("/event")} className="bg-white text-black px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                        CREATE EVENT
                    </button>
                    <button className="px-10 py-5 rounded-full font-bold text-lg text-white border-2 border-neutral-700 hover:bg-neutral-900 transition-colors">
                        Download App
                    </button>
                </div>
            </div>
        </div>
    )
        ;
}
// ==========================================
// ABOUT US PAGE COMPONENT (Reusing components for consistency)
// ==========================================

const AboutUs = () => {
    return (
        <div className="w-full animate-in fade-in duration-500 bg-white">
            {/* Reusing Home components for a consistent look, but could add specific About text here */}
            <HeroSection />
            <FeatureGrid />
            <CtaSection />
        </div>
    );
};

export { AboutUs };

// ==========================================
// MAIN APP COMPONENT (With Navigation Logic)
// ==========================================

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    return (
        <div className="w-full font-sans antialiased text-black">
            {/* <Navbar onNavigate={setCurrentPage} /> */}

            {/* NOTE: I have replaced the old text-heavy IntroSection/WhyChooseUs
        with the new Party-Themed components as the DEFAULT Home view.
      */}
            {currentPage === 'home' && (
                <>
                    <HeroSection />
                    <FeatureGrid />
                    <CtaSection />
                </>
            )}

            {currentPage === 'about' && (
                <AboutUs />
            )}

            {/* <Footer /> */}
        </div>
    );
};

export default App;