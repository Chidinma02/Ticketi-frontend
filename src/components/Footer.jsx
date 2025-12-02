import { Check, Twitter, Instagram, Linkedin, Send } from 'lucide-react'; // Added icons for Footer

const Footer = () => {
    return (
        <>
        <footer className="bg-white border-t border-neutral-100 pt-20 pb-10 px-4 lg:px-12 font-sans text-neutral-600">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-2 h-2 bg-neutral-900 rounded-full"></div>
                            <span className="text-sm font-semibold tracking-widest uppercase text-neutral-900">The Platform</span>
                        </div>
                        <p className="text-neutral-500 mb-8 max-w-xs leading-relaxed">
                            Redefining how the world experiences live events. Built for creators, loved by fans.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-400 hover:bg-neutral-900 hover:text-white transition-all">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="font-medium text-neutral-900 mb-6">Product</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-gray-600 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition-colors">Enterprise</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="font-medium text-neutral-900 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/about" className="hover:text-gray-600 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-600 transition-colors">Blog</a></li>
                            <li><a href="/contact" className="hover:text-gray-600 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-2">
                        <h4 className="font-medium text-neutral-900 mb-6">Stay updated</h4>
                        <p className="text-sm text-neutral-500 mb-4">
                            Get the latest updates on features and releases.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                            />
                            <button className="bg-neutral-900 text-white px-4 py-2.5 rounded-lg hover:bg-neutral-800 transition-colors">
                                <Send size={18} />
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
                    <p>© 2025 The Platform Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-neutral-600 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-neutral-600 transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-neutral-600 transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
             
        </footer>
         <footer className="bg-gray-900 text-gray-300 py-6 text-center mt-12">
            <p>© {new Date().getFullYear()} Ticketi. All rights reserved.</p>
        </footer>
        </>
    );
};
export default Footer;