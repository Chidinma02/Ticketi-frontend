import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategoryFilter from "../components/CategoryFilter";
import EventCard from "../components/EventCard";
import Footer from "../components/Footer";
import { use, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ScrollingGallery from "../components/ScrollingGallery";
import SummerPromo from "../components/SummerPromo";
import AboutPlatform from "../components/AboutPlatform";
import HeroSection from "../components/HeroSection";
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
            {/* <CategoryFilter /> */}
            {/* <section className="px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {eventList.map((event, idx) => (
                    // <EventCard key={idx} {...event} />
                    <EventCard key={idx} {...event} />

                ))}
            </section> */}
            <AboutPlatform></AboutPlatform>
            <SummerPromo></SummerPromo>

            <ScrollingGallery />
            <HeroSection />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;
