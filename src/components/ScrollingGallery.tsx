import React from 'react';

// 1. Data Source: Sample images mimicking the aspect ratios in your design
const items = [
    {
        id: 1,
        title: "Nightlife Vibes",
        url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&h=800&fit=crop", // Portrait
    },
    {
        id: 2,
        title: "Signature Cocktails",
        url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=600&fit=crop", // Square
    },
    {
        id: 3,
        title: "Event Crowd",
        url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=500&fit=crop", // Landscape
    },
    {
        id: 4,
        title: "Elegant Dining",
        url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=500&fit=crop", // Landscape - Updated URL
    },
    {
        id: 5,
        title: "Neon Lights",
        url: "https://images.unsplash.com/photo-1563299796-b729d0af54a5?w=500&h=800&fit=crop", // Portrait - Updated URL
    },
    {
        id: 6,
        title: "The Atmosphere",
        url: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&h=600&fit=crop", // Square
    },
    {
        id: 7,
        title: "Rooftop Celebration",
        url: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&h=800&fit=crop", // Portrait
    },
];

const ScrollingGallery = () => {
    // We duplicate the items to create the illusion of an infinite loop
    // When the first set scrolls out of view, the second set is perfectly in place,
    // and the animation snaps back to 0 instantly.
    const loopingItems = [...items, ...items];

    return (
        <section className="w-full py-12 bg-white overflow-hidden">
            {/* - overflow-hidden: Hides the scrollbar and keeps content contained
         - group: Allows us to pause the animation on hover
      */}
            <div className="w-full overflow-hidden relative group">

                {/* Animated Track 
           - flex: Aligns items in a row
           - w-max: Ensures the container is wide enough for all items
           - animate-marquee: Custom animation defined in <style>
           - hover:pause: Stops scrolling when user hovers
        */}
                <div className="flex gap-4 w-max animate-marquee group-hover:[animation-play-state:paused]">

                    {loopingItems.map((item, index) => (
                        <div
                            // Using index as key because we have duplicate IDs in the array
                            key={`${item.id}-${index}`}
                            className="relative flex-none"
                        >
                            <img
                                src={item.url}
                                alt={item.title}
                                className="h-64 w-auto rounded-3xl object-cover shadow-md cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    ))}

                </div>
            </div>

            {/* Internal CSS for the infinite scroll animation */}
            <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Move left by 50% of the total width (which is exactly one set of items) */
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
        </section>
    );
};

export default ScrollingGallery;
// Main App Component
// export default function App() {
//     return (
//         <div className="min-h-screen  flex flex-col justify-center bg-red">
//             {/* <div className="px-6 mb-4">
//                 <h1 className="text-2xl font-bold text-gray-800">Rotating Gallery</h1>
//                 <p className="text-gray-500">Infinite auto-scrolling marquee</p>
//             </div> */}

//             {/* Render the component you asked for */}
//             <SectionTwo />
//         </div>
//     );
// }