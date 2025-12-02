import React, { useEffect, useRef } from "react";
import { ArrowLeft, Calendar, Ticket } from "lucide-react";

// --- Confetti Component (Internal Helper) ---
const Confetti: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const particleCount = 150;
        const colors = ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'];
        let particles: any[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height - canvas.height,
                    radius: Math.random() * 4 + 1,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    velocity: {
                        x: Math.random() * 6 - 3,
                        y: Math.random() * 3 + 2
                    },
                    rotation: Math.random() * 360,
                    rotationSpeed: Math.random() * 10 - 5
                });
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p) => {
                p.velocity.y += 0.05;
                p.x += p.velocity.x;
                p.y += p.velocity.y;
                p.rotation += p.rotationSpeed;

                if (p.y > canvas.height) {
                    p.y = -20;
                    p.x = Math.random() * canvas.width;
                    p.velocity.y = Math.random() * 3 + 2;
                }

                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.radius, -p.radius, p.radius * 2, p.radius * 2);
                ctx.restore();
            });

            requestAnimationFrame(animate);
        };

        resizeCanvas();
        createParticles();
        const animationId = requestAnimationFrame(animate);
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

// --- Main Thank You Component ---
const ThankYou = () => {
    // Mock navigation for the standalone component
    const handleBackToEvent = () => {
        console.log("Navigating back to event...");
        // In a real router setup: navigate('/event/123');
        window.location.href = "/";
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">
            {/* Confetti Background */}
            <Confetti />

            {/* Card Content */}
            <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-[2rem] shadow-2xl p-10 max-w-lg w-full text-center animate-in fade-in zoom-in duration-500 border border-white/50">

                {/* Success Icon */}
                <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <Ticket className="w-12 h-12 text-green-600" />
                </div>

                {/* Title */}
                <h1 className="text-4xl font-black text-gray-900 mb-2 tracking-tight">
                    You're All Set!
                </h1>

                {/* The Requested Text */}
                <p className="text-lg text-gray-600 font-medium mb-8 leading-relaxed">
                    🎉 Thank you for registering! Your ticket has been sent to your email.
                </p>

                {/* Action Button */}
                <div className="space-y-4">
                    <button
                        onClick={handleBackToEvent}
                        className="w-full py-4 bg-black text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-gray-800 hover:shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Event
                    </button>

                    <div className="flex justify-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Add to Calendar</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;