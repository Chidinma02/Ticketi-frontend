import { useState } from "react";

const categories = ["All", "Concerts", "Festivals", "Parties", "Workshops"];

const CategoryFilter = () => {
    const [active, setActive] = useState("All");

    return (
        <div className="flex gap-4 overflow-x-auto px-8 py-6 bg-gray-50">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-4 py-2 rounded-full border transition ${active === cat
                            ? "bg-blue-600 text-white border-blue-600"
                            : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
