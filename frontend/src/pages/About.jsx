import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWater, FaMapMarkerAlt, FaRoute, FaBook, FaGopuram, FaBalanceScale } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleExploreRoutes = () => {
    navigate("/route");
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <div
        className="relative w-full h-80 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?narmada,river')" }}
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
          Narmada Parikrama is a sacred pilgrimage that involves circumambulating the Narmada River, one of the seven holy rivers of India.
        </p>
      </div>

      {/* Mythology Section */}
      <div className="max-w-5xl mx-auto p-6">
        <motion.h2 className="text-3xl font-semibold text-blue-600 text-center mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          Mythological Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div className="p-6 bg-white shadow-md rounded-lg" whileHover={{ scale: 1.05 }}>
            <FaBook className="text-4xl text-purple-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">The Birth of Narmada</h3>
            <p className="text-gray-600">
              According to Hindu mythology, Narmada was born from the sweat of Lord Shiva while he was in deep meditation.
            </p>
          </motion.div>
          <motion.div className="p-6 bg-white shadow-md rounded-lg" whileHover={{ scale: 1.05 }}>
            <FaGopuram className="text-4xl text-yellow-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Legend of Narmada and Sonbhadra</h3>
            <p className="text-gray-600">
              The river Sonbhadra, originally in love with Narmada, was heartbroken when she chose to flow freely, signifying her independence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Traditions & Rules Section */}
      <div className="max-w-5xl mx-auto p-6">
        <motion.h2 className="text-3xl font-semibold text-blue-600 text-center mb-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          Traditions & Rules of Parikrama
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div className="p-6 bg-white shadow-md rounded-lg text-center" whileHover={{ scale: 1.05 }}>
            <FaBalanceScale className="text-4xl text-green-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Walking Only</h3>
            <p className="text-gray-600">
              Pilgrims must complete the Parikrama on foot without crossing the river at any point.
            </p>
          </motion.div>
          <motion.div className="p-6 bg-white shadow-md rounded-lg text-center" whileHover={{ scale: 1.05 }}>
            <FaWater className="text-4xl text-blue-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">No Bathing at Night</h3>
            <p className="text-gray-600">
              Devotees believe that bathing in the river at night may invite negative energies.
            </p>
          </motion.div>
          <motion.div className="p-6 bg-white shadow-md rounded-lg text-center" whileHover={{ scale: 1.05 }}>
            <FaMapMarkerAlt className="text-4xl text-red-500 mx-auto" />
            <h3 className="text-xl font-semibold mt-2">Sacred Sites</h3>
            <p className="text-gray-600">
              Important pilgrimage sites include Omkareshwar, Maheshwar, and Amarkantak.
            </p>
          </motion.div>
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
