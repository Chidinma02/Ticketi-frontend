import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface EventProps {
    id: number;
    title: string;
    date: string;
    price: string;
    image: string;
}

const EventCard = ({ id, title, date, price, image }: EventProps) => {
    return (

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-transform"
        >
            <Link to={`/events/${id}`}>
                <img src={`http://127.0.0.1:8000/${image}`} alt={title} className="w-full h-56 object-cover" />
                <div className="p-4">
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-sm text-gray-500">{date}</p>
                    <p className="text-blue-600 font-bold mt-2">{price}</p>
                </div>
            </Link>
        </motion.div>

    );
};

export default EventCard;
