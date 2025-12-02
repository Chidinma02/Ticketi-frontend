
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";
import axios from "axios";
// --- Types ---
interface OrderFormState {
    name: string;
    email: string;
    address: string;
    quantity: number;
}

// --- Components ---

const EventDetail: React.FC = () => {
    // In a real app, these come from router hooks.
    // We use a fallback ID for the default route view.
    const { id } = useParams();
    const navigate = useNavigate();
    const eventId = id || "123";

    // UI States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // Form State
    const [form, setForm] = useState<OrderFormState>({
        name: "",
        email: "",
        address: "",
        quantity: 1,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: name === "quantity" ? Number(value) : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage(null);
        setIsSubmitting(true);

        try {
            // Replaced real axios with mock for demonstration
            await axios.post(`http://127.0.0.1:8000/api/events/${id}/order`, form);

            navigate("/thank-you");
        } catch (error) {
            console.error("Registration failed:", error);
            setErrorMessage("Failed to register. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 mt-30">

            {/* Main Card Container 
          - Removed 'flex-row' and 'md:flex-row' since we only have one column now.
          - Changed max-width to 'max-w-xl' for a nice centered form card.
      */}
            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden max-w-xl w-full flex flex-col relative">

                {/* Decorative Top Bar (Optional, adds a little flair since image is gone) */}
                <div className="h-3  w-full" />

                <div className="p-8 md:p-12">

                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Reserve Your Spot</h2>
                        <p className="text-gray-500 text-sm">
                            Join us for an unforgettable experience. <br />
                            Fills up fast—secure your tickets below.
                        </p>
                    </div>

                    {/* Error Feedback */}
                    {errorMessage && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium flex items-center gap-2 animate-pulse">
                            <span className="block w-2 h-2 bg-red-600 rounded-full"></span>
                            {errorMessage}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                placeholder="e.g. Alex Smith"
                                className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black rounded-xl px-4 py-3 transition-all outline-none"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                placeholder="alex@example.com"
                                className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black rounded-xl px-4 py-3 transition-all outline-none"
                            />
                        </div>

                        <div className="flex gap-4">
                            <div className="w-2/3 space-y-1">
                                <label htmlFor="address" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    required
                                    placeholder="Street Address"
                                    className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black rounded-xl px-4 py-3 transition-all outline-none"
                                />
                            </div>

                            <div className="w-1/3 space-y-1">
                                <label htmlFor="quantity" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                                    Qty
                                </label>
                                <input
                                    id="quantity"
                                    type="number"
                                    name="quantity"
                                    min="1"
                                    max="10"
                                    value={form.quantity}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-50 border-2 border-transparent focus:bg-white focus:border-black rounded-xl px-4 py-3 transition-all outline-none text-center font-medium"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full mt-8 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2
                ${isSubmitting
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none transform-none"
                                    : "bg-black text-white hover:shadow-xl hover:bg-gray-900"
                                }`}
                        >
                            {isSubmitting ? (
                                <span>Processing...</span>
                            ) : (
                                <span>Confirm Booking</span>
                            )}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <button className="text-xs text-gray-400 hover:text-gray-600 font-medium underline">
                            Need help with your order?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- Success Page Component ---
const ThankYouPage = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <div className="bg-white rounded-[2rem] shadow-xl p-12 max-w-md w-full text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">You're In!</h2>
                <p className="text-gray-500 mb-8">
                    Thanks for reserving your spot. We've sent a confirmation email with all the details.
                </p>
                <button
                    onClick={() => navigate("/")}
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold rounded-xl transition-colors"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </button>
            </div>
        </div>
    );
};

// --- Main App Component ---
export default function App() {
    return (
        // <BrowserRouter>
        <Routes>
            <Route path="/" element={<EventDetail />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
        // </BrowserRouter>
    );
}