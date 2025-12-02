import React from 'react'
import {
    Check, Twitter, Instagram, Linkedin, Send,
    ArrowRight, Play, Star, Zap, Globe, Ticket,
    Calendar, Users, BarChart3, ArrowUpRight, Plus, ScanLine, LayoutGrid, ShieldCheck, Smartphone,
    PartyPopper, Music, Disc, MapPin, Mail, MessageSquare
} from 'lucide-react';


const ContactPage = () => {
    return (
        <div className="bg-white pt-36 pb-20 px-6 font-sans animate-in fade-in duration-500">
            <div className="max-w-4xl mx-auto text-center mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider mb-8">
                    <MessageSquare size={14} />
                    Get In Touch
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter leading-[0.9] mb-8">
                    Holla At Us.
                </h1>
                <p className="text-xl md:text-2xl text-neutral-500 font-medium max-w-2xl mx-auto">
                    Questions about your event? Want to partner up? Or just wanna say hi? We're all ears.
                </p>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Contact Info Cards */}
                <div className="space-y-8">
                    <div className="bg-neutral-50 rounded-[40px] p-8 md:p-12 border border-neutral-100">
                        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                            <MapPin size={28} />
                        </div>
                        <h3 className="text-3xl font-black text-black mb-4 tracking-tight">Visit HQ</h3>
                        <p className="text-lg text-neutral-500 font-medium mb-8">
                            123 Party Avenue, <br />
                            Victoria Island, Lagos
                        </p>
                        <div className="h-64 w-full rounded-[32px] overflow-hidden relative">
                            <img
                                /* UPDATED: Valid Unsplash map image */
                                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop"
                                alt="Office Map"
                                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-yellow-400 rounded-[40px] p-8 flex flex-col justify-between min-h-[200px]">
                            <Mail size={32} className="text-black mb-4" />
                            <div>
                                <h4 className="font-bold text-black text-xl mb-1">Email Us</h4>
                                <p className="text-black/70 font-medium">hello@partynodeystop.com</p>
                            </div>
                        </div>
                        <div className="bg-purple-600 rounded-[40px] p-8 flex flex-col justify-between min-h-[200px]">
                            <Smartphone size={32} className="text-white mb-4" />
                            <div>
                                <h4 className="font-bold text-white text-xl mb-1">Call Us</h4>
                                <p className="text-white/70 font-medium">+234 800 PARTY ON</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-black rounded-[40px] p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-purple-900 rounded-full blur-3xl opacity-20 -mr-16 -mt-16 pointer-events-none"></div>

                    <h3 className="text-3xl font-black mb-8 relative z-10">Send a Message</h3>

                    <form className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">First Name</label>
                                <input type="text" className="w-full bg-neutral-900 border-2 border-neutral-800 rounded-2xl px-6 py-4 font-medium text-white focus:border-white outline-none transition-colors" placeholder="Jane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Last Name</label>
                                <input type="text" className="w-full bg-neutral-900 border-2 border-neutral-800 rounded-2xl px-6 py-4 font-medium text-white focus:border-white outline-none transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Email Address</label>
                            <input type="email" className="w-full bg-neutral-900 border-2 border-neutral-800 rounded-2xl px-6 py-4 font-medium text-white focus:border-white outline-none transition-colors" placeholder="jane@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Subject</label>
                            <select className="w-full bg-neutral-900 border-2 border-neutral-800 rounded-2xl px-6 py-4 font-medium text-white focus:border-white outline-none transition-colors appearance-none cursor-pointer">
                                <option>General Inquiry</option>
                                <option>Ticket Support</option>
                                <option>Partnerships</option>
                                <option>Press</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-neutral-400">Message</label>
                            <textarea rows="4" className="w-full bg-neutral-900 border-2 border-neutral-800 rounded-2xl px-6 py-4 font-medium text-white focus:border-white outline-none transition-colors resize-none" placeholder="Tell us what's on your mind..."></textarea>
                        </div>

                        <button className="w-full bg-white text-black font-black py-5 rounded-2xl text-lg uppercase tracking-widest hover:bg-neutral-200 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                            Send Message <Send size={20} />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ContactPage