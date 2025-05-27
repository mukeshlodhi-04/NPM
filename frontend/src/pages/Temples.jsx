import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaHistory, 
  FaInfoCircle, 
  FaArchway,
  FaChevronDown,
  FaChevronUp,
  FaTimes,
  FaShare,
  FaHeart,
  FaMapMarkedAlt
} from 'react-icons/fa';
import { GiTempleGate } from 'react-icons/gi';
import templesData from '../assets/templesData'; // Import your data structure

const Temples = () => {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [activeTab, setActiveTab] = useState('significance');
  const [isStateDropdownOpen, setIsStateDropdownOpen] = useState(false);
  const [isDistrictDropdownOpen, setIsDistrictDropdownOpen] = useState(false);

  // Get all states
  const states = ['all', ...Object.keys(templesData)];

  // Get districts based on selected state
  const getDistricts = () => {
    if (selectedState === 'all') return ['all'];
    return ['all', ...Object.keys(templesData[selectedState].districts).filter(d => d !== 'all')];
  };

  // Filter temples based on selections
  const getFilteredTemples = () => {
    let filtered = [];
    
    if (selectedState === 'all') {
      // Show all temples from all states
      Object.values(templesData).forEach(state => {
        Object.values(state.districts).forEach(district => {
          filtered = [...filtered, ...district.temples];
        });
      });
    } else if (selectedDistrict === 'all') {
      // Show all temples from selected state
      filtered = templesData[selectedState].districts['all'].temples;
    } else {
      // Show temples from selected district
      filtered = templesData[selectedState].districts[selectedDistrict].temples;
    }
    
    return filtered;
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setSelectedDistrict('all');
    setIsStateDropdownOpen(false);
  };

  const handleDistrictSelect = (district) => {
    setSelectedDistrict(district);
    setIsDistrictDropdownOpen(false);
  };

  const openTempleDetails = (temple) => {
    setSelectedTemple(temple);
    setActiveTab('significance');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeTempleDetails = () => {
    setSelectedTemple(null);
    document.body.style.overflow = 'auto';
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-blue-900 text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center">
            <GiTempleGate className="mr-3 text-blue-300" />
            Narmada Temples Explorer
          </h1>
          <p className="text-blue-200 text-lg">
            Discover sacred temples along the holy Narmada River
          </p>
        </div>
      </header>

      {/* Filter Section */}
      <div className="bg-white shadow-md sticky top-0 z-10 py-4 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
          {/* State Dropdown */}
          <div className="relative flex-1">
            <button 
              className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-3 text-left"
              onClick={() => setIsStateDropdownOpen(!isStateDropdownOpen)}
            >
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                <span>{selectedState === 'all' ? 'All States' : selectedState === 'madhayapradesh' ? 'Madhya Pradesh' : 'Gujarat'}</span>
              </div>
              {isStateDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {isStateDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"
              >
                {states.map(state => (
                  <div
                    key={state}
                    className={`px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center ${selectedState === state ? 'bg-blue-50 text-blue-600' : ''}`}
                    onClick={() => handleStateSelect(state)}
                  >
                    <FaMapMarkerAlt className="text-blue-600 mr-2" />
                    {state === 'all' ? 'All States' : state === 'madhayapradesh' ? 'Madhya Pradesh' : 'Gujarat'}
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* District Dropdown */}
          <div className="relative flex-1">
            <button 
              className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-lg px-4 py-3 text-left disabled:opacity-50"
              onClick={() => setIsDistrictDropdownOpen(!isDistrictDropdownOpen)}
              disabled={selectedState === 'all'}
            >
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                <span>
                  {selectedDistrict === 'all' 
                    ? 'All Districts' 
                    : selectedState !== 'all' 
                      ? templesData[selectedState].districts[selectedDistrict]?.name || 'Select District'
                      : 'Select State First'}
                </span>
              </div>
              {isDistrictDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            
            {isDistrictDropdownOpen && selectedState !== 'all' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg overflow-y-auto max-h-60"
              >
                {getDistricts().map(district => (
                  <div
                    key={district}
                    className={`px-4 py-3 hover:bg-blue-50 cursor-pointer flex items-center ${selectedDistrict === district ? 'bg-blue-50 text-blue-600' : ''}`}
                    onClick={() => handleDistrictSelect(district)}
                  >
                    <FaMapMarkerAlt className="text-blue-600 mr-2" />
                    {district === 'all' 
                      ? 'All Districts' 
                      : templesData[selectedState].districts[district].name}
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-8 px-4">
        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Showing {getFilteredTemples().length} temple{getFilteredTemples().length !== 1 ? 's' : ''}
          {selectedState !== 'all' && ` in ${selectedState === 'madhayapradesh' ? 'Madhya Pradesh' : 'Gujarat'}`}
          {selectedDistrict !== 'all' && selectedState !== 'all' && ` > ${templesData[selectedState].districts[selectedDistrict].name}`}
        </div>

        {/* Temples Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {getFilteredTemples().map(temple => (
            <motion.div
              key={temple.id}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={temple.image} 
                  alt={temple.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">{temple.name}</h3>
                <div className="flex items-center text-gray-600 mb-3">
                  <FaMapMarkerAlt className="mr-2 text-sm" />
                  <span className="text-sm">
                    {temple.district}, {temple.district === 'Narmada' || temple.district === 'Bharuch' ? 'Gujarat' : 'Madhya Pradesh'}
                  </span>
                </div>
                <button
                  onClick={() => openTempleDetails(temple)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                >
                  <FaInfoCircle className="mr-2" />
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Temple Detail Modal */}
      <AnimatePresence>
        {selectedTemple && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            {/*<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={closeTempleDetails}
            ></motion.div>*/}

            <div className="flex items-center justify-center min-h-screen p-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Image */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={selectedTemple.image} 
                    alt={selectedTemple.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={closeTempleDetails}
                    className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                  >
                    <FaTimes className="text-gray-800" />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedTemple.name}</h2>
                  <div className="flex items-center text-gray-600 mb-6">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>{selectedTemple.district}, {selectedTemple.district === 'Narmada' || selectedTemple.district === 'Bharuch' ? 'Gujarat' : 'Madhya Pradesh'}</span>
                  </div>

                  {/* Tabs */}
                  <div className="border-b border-gray-200 mb-6">
                    <nav className="flex space-x-8">
                      <button
                        onClick={() => setActiveTab('significance')}
                        className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'significance' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      >
                        <FaInfoCircle className="mr-2" />
                        Significance
                      </button>
                      <button
                        onClick={() => setActiveTab('history')}
                        className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'history' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      >
                        <FaHistory className="mr-2" />
                        History
                      </button>
                      <button
                        onClick={() => setActiveTab('architecture')}
                        className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'architecture' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                      >
                        <FaArchway className="mr-2" />
                        Architecture
                      </button>
                    </nav>
                  </div>

                  {/* Tab Content */}
                  <div className="mb-6">
                    {activeTab === 'significance' && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Significance</h3>
                        <p className="text-gray-600">{selectedTemple.significance}</p>
                      </div>
                    )}
                    {activeTab === 'history' && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">History</h3>
                        <p className="text-gray-600 mb-4">{selectedTemple.history}</p>
                        {selectedTemple.builtBy && (
                          <>
                            <h4 className="font-medium text-gray-800 mb-2">Built By</h4>
                            <p className="text-gray-600">{selectedTemple.builtBy}</p>
                          </>
                        )}
                      </div>
                    )}
                    {activeTab === 'architecture' && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Architecture</h3>
                        <p className="text-gray-600">{selectedTemple.architecture}</p>
                      </div>
                    )}
                  </div>

                  {/* Map Embed */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                      <FaMapMarkedAlt className="mr-2 text-blue-600" />
                      Location
                    </h3>
                    <div className="bg-gray-200 h-48 rounded-lg overflow-hidden flex items-center justify-center">
                      <a 
                        href={selectedTemple.mapLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline flex items-center"
                      >
                        <FaMapMarkedAlt className="mr-2" />
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="border-t border-gray-200 p-4 bg-gray-50 flex justify-between">
                  <button className="text-gray-600 hover:text-gray-800 flex items-center">
                    <FaShare className="mr-2" />
                    Share
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 flex items-center">
                    <FaHeart className="mr-2" />
                    Save
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Temples;