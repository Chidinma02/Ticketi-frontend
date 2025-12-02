import React from 'react';
import { Check, Twitter, Instagram, Linkedin, Send } from 'lucide-react'; // Added icons for Footer

// --- EXISTING COMPONENT: INTRO SECTION ---
const IntroSection = () => {
    return (
        <section className="bg-white pt-32 pb-24 px-4 lg:px-12 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Main Headline Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end border-b border-neutral-100 pb-20">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-500">The Platform</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 leading-[1.1]">
                            We build the stage. <br />
                            <span className="text-neutral-400">You create the magic.</span>
                        </h1>
                    </div>

                    <div className="lg:pl-12">
                        <p className="text-xl text-neutral-500 leading-relaxed mb-10">
                            A comprehensive ticketing solution designed for the modern creator.
                            We handle the complexity of sales, seats, and stats so you can focus strictly on the experience.
                        </p>

                        {/* Minimal Stats Row */}
                        <div className="flex gap-12 border-t border-neutral-100 pt-8">
                            <div>
                                <div className="text-4xl font-medium text-neutral-900 mb-1 tracking-tight">10M+</div>
                                <div className="text-sm text-neutral-400 font-medium">Tickets Sold</div>
                            </div>
                            <div>
                                <div className="text-4xl font-medium text-neutral-900 mb-1 tracking-tight">0%</div>
                                <div className="text-sm text-neutral-400 font-medium">Hidden Fees</div>
                            </div>
                            <div>
                                <div className="text-4xl font-medium text-neutral-900 mb-1 tracking-tight">24/7</div>
                                <div className="text-sm text-neutral-400 font-medium">Live Support</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- EXISTING COMPONENT: WHY CHOOSE US ---
const WhyChooseUs = () => {
    return (
        <section className="bg-neutral-50 py-24 px-4 lg:px-12 font-sans border-t border-neutral-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left: Narrative & Checklist */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 mb-6">
                            Built for scale, <br /> designed for speed.
                        </h2>
                        <p className="text-neutral-500 text-lg leading-relaxed mb-8">
                            Traditional ticketing platforms are clunky, expensive, and hold your money hostage. We built a system that treats creators like partners. With infrastructure that scales from 10 to 100,000 attendees instantly.
                        </p>

                        <div className="flex flex-col gap-4">
                            {/* Checklist Item 1 */}
                            <div className="flex items-center gap-3 text-neutral-700 group cursor-default">
                                <div className="w-6 h-6 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors flex items-center justify-center text-blue-600 group-hover:text-white">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <span className="font-medium">Direct-to-fan sales tools</span>
                            </div>
                            {/* Checklist Item 2 */}
                            <div className="flex items-center gap-3 text-neutral-700 group cursor-default">
                                <div className="w-6 h-6 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors flex items-center justify-center text-blue-600 group-hover:text-white">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <span className="font-medium">Automated marketing integrations</span>
                            </div>
                            {/* Checklist Item 3 */}
                            <div className="flex items-center gap-3 text-neutral-700 group cursor-default">
                                <div className="w-6 h-6 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors flex items-center justify-center text-blue-600 group-hover:text-white">
                                    <Check size={14} strokeWidth={3} />
                                </div>
                                <span className="font-medium">Real-time fraud protection</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Bento Grid Stats */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Stat Card 1 */}
                        <div className="bg-white p-8 rounded-3xl border border-neutral-200/60 shadow-sm flex flex-col justify-between h-48 hover:shadow-md transition-shadow">
                            <div className="text-5xl font-medium text-neutral-900 tracking-tighter">98%</div>
                            <div className="text-sm text-neutral-500 font-medium leading-snug">Customer satisfaction rate across 5 million users.</div>
                        </div>

                        {/* Stat Card 2 (Dark) */}
                        <div className="bg-neutral-900 p-8 rounded-3xl border border-neutral-900 shadow-sm flex flex-col justify-between h-48 text-white hover:scale-[1.02] transition-transform duration-300">
                            <div className="text-5xl font-medium tracking-tighter text-blue-400">0.5s</div>
                            <div className="text-sm text-neutral-400 font-medium leading-snug">Average checkout time. The fastest in the industry.</div>
                        </div>

                        {/* Stat Card 3 (Wide) */}
                        <div className="bg-white p-8 rounded-3xl border border-neutral-200/60 shadow-sm flex flex-col justify-between h-48 sm:col-span-2 hover:shadow-md transition-shadow">
                            <div className="flex items-end gap-3">
                                <div className="text-5xl font-medium text-neutral-900 tracking-tighter">$250M+</div>
                                <div className="mb-2 text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded-full">+125% YoY</div>
                            </div>
                            <div className="text-sm text-neutral-500 font-medium leading-snug">Revenue generated for creators just like you in the last year alone.</div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- NEW COMPONENT: FOOTER ---

// --- MAIN APP COMPONENT ---
const App = () => {
    return (
        <div className="w-full">
            <IntroSection />
            <WhyChooseUs />

        </div>
    );
};

export default App;