import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryFilter from "../components/CategoryFilter";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import { use, useEffect } from "react";
import { useState } from "react";
import axios from "axios";


const events = [
    {
        title: "Summer Music Festival",
        date: "July 20, 2025",
        price: "$49",
        image: "/event1.jpg",
    },
    {
        title: "Tech Conference 2025",
        date: "Aug 12, 2025",
        price: "$99",
        image: "/event2.jpg",
    },
    {
        title: "Beach Party",
        date: "Sept 5, 2025",
        price: "$29",
        image: "/event3.jpg",
    },
    {
        title: "Art & Wine Night",
        date: "Oct 10, 2025",
        price: "$39",
        image: "/event4.jpg",
    },
];

const Home = () => {


    const getEvents = () => {
        axios.get('http://127.0.0.1:8000/api/events')
            .then(response => {
                setEventList(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }
    useEffect(() => {
        getEvents();
    }, []);

    const [eventList, setEventList] = useState([]);
    return (

        <div>
            <Navbar />
            <Hero />
            <CategoryFilter />
            <section className="px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {eventList.map((event, idx) => (
                    // <EventCard key={idx} {...event} />
                    <EventCard key={idx} {...event} />

                ))}
            </section>
            <Footer />
        </div>
    );
};

export default Home;
