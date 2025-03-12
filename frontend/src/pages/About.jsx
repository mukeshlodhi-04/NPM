import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWater, FaMapMarkerAlt, FaRoute } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleExploreRoutes = () => {
    navigate("/route"); // Navigate to the Route page
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?narmada,river')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
          <h1 className="text-4xl font-bold">Narmada Parikrama</h1>
          <p className="text-lg">The Spiritual Journey Along the Sacred River</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="max-w-4xl mx-auto p-6 text-center">
        <motion.h2
          className="text-3xl font-semibold text-blue-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Narmada Parikrama
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600">
          Narmada Parikrama is a sacred pilgrimage that involves circumambulating
          the Narmada River, one of the seven holy rivers of India. The Narmada
          River, often referred to as the "Lifeline of Central India," holds
          immense spiritual significance in Hinduism. It is believed that a dip
          in the Narmada River can cleanse one's sins and lead to salvation.
        </p>
        {showMore && (
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            The Narmada Parikrama is not just a physical journey but also a
            spiritual one. Devotees walk along the river, visiting ancient
            temples, ashrams, and sacred sites, while immersing themselves in
            the divine energy of the river. The Narmada River is also known for
            its breathtaking natural beauty, with lush green forests, serene
            waterfalls, and tranquil ghats lining its banks.
          </motion.p>
        )}
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
      </div>

      {/* Key Highlights */}
      <div className="max-w-5xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          className="p-6 bg-white shadow-md rounded-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaWater className="text-4xl text-blue-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-2">Sacred River</h3>
          <p className="text-gray-600">
            One of the holiest rivers in India with rich cultural heritage.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white shadow-md rounded-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-2">Major Cities</h3>
          <p className="text-gray-600">
            Flows through Madhya Pradesh, Gujarat, and Maharashtra.
          </p>
        </motion.div>
        <motion.div
          className="p-6 bg-white shadow-md rounded-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <FaRoute className="text-4xl text-green-500 mx-auto" />
          <h3 className="text-xl font-semibold mt-2">Sacred Routes</h3>
          <p className="text-gray-600">
            Explore the ancient routes and temples along the river.
          </p>
        </motion.div>
      </div>

      {/* Photo Gallery Section */}
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">
          Explore the Beauty of Narmada
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <motion.img
            src=""
            alt="Narmada River 1"
            className="rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src=""
            alt="Narmada River 2"
            className="rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          />
          <motion.img
            src=""
            alt="Narmada River 3"
            className="rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-500 py-12 mt-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Explore the Sacred Routes?
          </h2>
          <p className="text-white text-lg mb-6">
            Discover the sacred temples and routes along the Narmada River.
          </p>
          <motion.button
            onClick={handleExploreRoutes}
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Explore Routes
          </motion.button>
        </div>
      </div>
    </div>
  );
}