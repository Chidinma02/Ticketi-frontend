import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Lock, Mail, ArrowRight, Loader2, AlertCircle } from "lucide-react";

export default function Login() {
    const navigate = useNavigate();

    // UI States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    // Form & Validation State
    const [form, setForm] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({ email: "", password: "" });

    const validate = () => {
        const newErrors = { email: "", password: "" };
        let isValid = true;

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
            // Using real axios to connect to the backend
            const res = await axios.post("http://127.0.0.1:8000/api/login", form);

            // Save token to local storage
            localStorage.setItem("token", res.data.token);

            // Navigate to dashboard
            navigate('/dashboard');
        } catch (err: any) {
            console.error(err);
            // Use specific error message from API if available, otherwise default
            const apiMessage = err.response?.data?.message || "Invalid email or password. Please try again.";
            setSubmitError(apiMessage);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">

            {/* Main Card Container */}
            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden max-w-md w-full relative flex flex-col">

                <div className="p-10 md:p-12">

                    <div className="mb-8 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
                        <p className="text-gray-500 text-sm">
                            Sign in to access your dashboard.
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
                            <div className="flex justify-between items-center ml-1">
                                <label htmlFor="password" className="text-xs font-bold uppercase tracking-wider text-gray-500">
                                    Password
                                </label>
                                <button type="button" className="text-xs font-bold text-gray-400 hover:text-black transition-colors">
                                    Forgot?
                                </button>
                            </div>
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
                                    Verifying...
                                </>
                            ) : (
                                <>
                                    Sign In <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-gray-500">
                            Don't have an account?{" "}
                            <button className="font-bold text-black hover:underline">
                                Create one
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}