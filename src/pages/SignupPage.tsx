import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { User, Lock, Mail, ArrowRight, Loader2, AlertCircle } from "lucide-react";

export default function Signup() {
    const navigate = useNavigate();

    // UI States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    // Form & Validation State
    const [form, setForm] = useState({ name: "", email: "", password: "" });
    const [errors, setErrors] = useState({ name: "", email: "", password: "" });

    const validate = () => {
        const newErrors = { name: "", email: "", password: "" };
        let isValid = true;

        // Name Validation
        if (!form.name.trim()) {
            newErrors.name = "Full name is required";
            isValid = false;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.email) {
            newErrors.email = "Email is required";
            isValid = false;
        } else if (!emailRegex.test(form.email)) {
            newErrors.email = "Please enter a valid email address";
            isValid = false;
        }

        // Password Validation
        if (!form.password) {
            newErrors.password = "Password is required";
            isValid = false;
        } else if (form.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });

        // Clear specific field error when user types
        if (errors[name as keyof typeof errors]) {
            setErrors({ ...errors, [name]: "" });
        }
        // Clear global submit error
        if (submitError) setSubmitError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitError(null);

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);

        try {
            // Using real axios to connect to your local backend
            const res = await axios.post("http://127.0.0.1:8000/api/register", form);

            // Assuming your API returns the token in res.data.token
            localStorage.setItem("token", res.data.token);

            // Navigate to dashboard
            navigate('/dashboard');
            // alert("Signup successful!");
        } catch (err: any) {
            console.error(err);
            // Handle generic or specific API errors
            // Checks for error message in response body first, then falls back to generic message
            const apiMessage = err.response?.data?.message || "Failed to create account. Please try again.";
            setSubmitError(apiMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 mt-20">

            {/* Main Card Container */}
            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden max-w-md w-full relative flex flex-col">

                <div className="p-10 md:p-12">

                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2>
                        <p className="text-gray-500 text-sm">
                            Join us to start your journey today.
                        </p>
                    </div>

                    {/* Global Error Message */}
                    {submitError && (
                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium flex items-center gap-2 animate-pulse">
                            <AlertCircle className="w-4 h-4" />
                            {submitError}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Name Field */}
                        <div className="space-y-1">
                            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                                Full Name
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className={`h-5 w-5 transition-colors ${errors.name ? 'text-red-400' : 'text-gray-400 group-focus-within:text-black'}`} />
                                </div>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={`w-full bg-gray-50 border-2 rounded-xl pl-12 pr-4 py-3 transition-all outline-none
                    ${errors.name
                                            ? "border-red-100 focus:border-red-500 bg-red-50/50"
                                            : "border-transparent focus:bg-white focus:border-black"
                                        }`}
                                />
                            </div>
                            {errors.name && (
                                <p className="text-red-500 text-xs font-medium ml-1 animate-in slide-in-from-top-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div className="space-y-1">
                            <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Mail className={`h-5 w-5 transition-colors ${errors.email ? 'text-red-400' : 'text-gray-400 group-focus-within:text-black'}`} />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={`w-full bg-gray-50 border-2 rounded-xl pl-12 pr-4 py-3 transition-all outline-none
                    ${errors.email
                                            ? "border-red-100 focus:border-red-500 bg-red-50/50"
                                            : "border-transparent focus:bg-white focus:border-black"
                                        }`}
                                />
                            </div>
                            {errors.email && (
                                <p className="text-red-500 text-xs font-medium ml-1 animate-in slide-in-from-top-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="space-y-1">
                            <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">
                                Password
                            </label>
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className={`h-5 w-5 transition-colors ${errors.password ? 'text-red-400' : 'text-gray-400 group-focus-within:text-black'}`} />
                                </div>
                                <input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="••••••••"
                                    value={form.password}
                                    onChange={handleChange}
                                    className={`w-full bg-gray-50 border-2 rounded-xl pl-12 pr-4 py-3 transition-all outline-none
                    ${errors.password
                                            ? "border-red-100 focus:border-red-500 bg-red-50/50"
                                            : "border-transparent focus:bg-white focus:border-black"
                                        }`}
                                />
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-xs font-medium ml-1 animate-in slide-in-from-top-1">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full mt-6 py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2
                ${isSubmitting
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none transform-none"
                                    : "bg-black text-white hover:shadow-xl hover:bg-gray-900"
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Sign Up <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            Already have an account?{" "}
                            <button
                                onClick={() => navigate('/login')}
                                className="font-bold text-black hover:underline"
                            >
                                Sign in
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}