import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BookingSearch from "./components/BookingSearch";
import VehicleGrid from "./components/VehicleGrid";
import ProductShowcase from "./components/ProductShowcase";
import HowItWorks from "./components/HowItWorks";
import Categories from "./components/Categories";
import TripPlanner from "./components/TripPlanner";
import Features from "./components/Features";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  const [vehicleFilter, setVehicleFilter] = useState("Any vehicle");

  return (
    <div className="min-h-screen bg-[var(--color-ivory)]">
      <Navbar />
      <main>
        <Hero />
        <BookingSearch onSearch={({ vehicleType }) => setVehicleFilter(vehicleType)} />
        <VehicleGrid filter={vehicleFilter} />
        <ProductShowcase />
        <HowItWorks />
        <Categories />
        <TripPlanner />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
