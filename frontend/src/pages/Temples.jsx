import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaWater, 
  FaMapMarkerAlt, 
  FaRoute, 
  FaBook, 
  FaGopuram, 
  FaBalanceScale,
  FaLeaf,
  FaTint,
  FaIndustry
} from 'react-icons/fa';
import { GiRiver, GiStonePath, GiTempleGate } from 'react-icons/gi';
import { MdCelebration, MdExpandMore } from 'react-icons/md';

const NarmadaTemples = () => {
  const [selectedState, setSelectedState] = useState('madhayapradesh');
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Temple data
  const templesData = {
    madhayapradesh: [
      {
        id: 1,
        name: 'Omkareshwar Jyotirlinga',
        image: 'https://source.unsplash.com/random/600x400/?omkareshwar,temple',
        history: 'One of the 12 Jyotirlingas, Omkareshwar is situated on an island shaped like the sacred Om symbol. The temple dates back to ancient times and is mentioned in Hindu scriptures.',
        significance: 'Considered highly sacred as it houses one of the 12 Jyotirlingas of Lord Shiva. The Narmada river flows around the island making it a picturesque location.',
        mapLink: 'https://goo.gl/maps/XYZ123'
      },
      {
        id: 2,
        name: 'Maa Harsiddhi Temple',
        image: 'https://source.unsplash.com/random/600x400/?harsiddhi,temple',
        history: 'An ancient Shakti Peetha temple dedicated to Goddess Harsiddhi. Believed to be established by Lord Krishna himself.',
        significance: 'One of the 51 Shakti Peethas where body parts of Goddess Sati fell. The temple is known for its unique architecture and spiritual energy.',
        mapLink: 'https://goo.gl/maps/XYZ124'
      },
      {
        id: 3,
        name: 'Bhedaghat Marble Rocks',
        image: 'https://source.unsplash.com/random/600x400/?marble,rocks,narmada',
        history: 'Formed over millions of years by the Narmada river cutting through marble rocks. The site has been sacred since ancient times.',
        significance: 'Natural wonder with spiritual significance. The moonlight reflection on marble rocks during full moon is legendary.',
        mapLink: 'https://goo.gl/maps/XYZ125'
      },
      {
        id: 4,
        name: 'Dhuandhar Falls',
        image: 'https://source.unsplash.com/random/600x400/?waterfall,narmada',
        history: 'The mighty Narmada river plunges here creating a spectacular waterfall mentioned in ancient texts.',
        significance: 'Sacred site where the rivers power is most visible. The mist created gives the name "Dhuandhar" (smoke cascade).',
        mapLink: 'https://goo.gl/maps/XYZ126'
      },
      {
        id: 5,
        name: 'Chausath Yogini Temple',
        image: 'https://source.unsplash.com/random/600x400/?yogini,temple',
        history: 'Built in the 10th century by the Kalachuri dynasty, this is one of the few remaining Yogini temples in India.',
        significance: 'Dedicated to the 64 Yoginis (female deities), represents an ancient tantric tradition of Hinduism.',
        mapLink: 'https://goo.gl/maps/XYZ127'
      },
      {
        id: 6,
        name: 'Narmada Udgam Temple',
        image: 'https://source.unsplash.com/random/600x400/?source,narmada',
        history: 'Marks the origin point of the Narmada river at Amarkantak. The temple complex was built over centuries.',
        significance: 'Most sacred point of the Narmada river where the river emerges from the earth. Pilgrimage starts here.',
        mapLink: 'https://goo.gl/maps/XYZ128'
      },
      {
        id: 7,
        name: 'Shri Sarvodaya Digambar Jain Temple',
        image: 'https://source.unsplash.com/random/600x400/?jain,temple',
        history: 'Modern temple built in the 20th century showcasing Jain architecture and philosophy.',
        significance: 'Important Jain pilgrimage site with beautiful marble carvings depicting Jain Tirthankaras.',
        mapLink: 'https://goo.gl/maps/XYZ129'
      },
      {
        id: 8,
        name: 'Mai Ki Bagiya',
        image: 'https://source.unsplash.com/random/600x400/?garden,temple',
        history: 'Natural garden believed to be created by the Narmada goddess herself. Maintained by local priests for centuries.',
        significance: 'Sacred grove with trees and plants mentioned in scriptures. Pilgrims walk barefoot through this garden.',
        mapLink: 'https://goo.gl/maps/XYZ130'
      },
      {
        id: 9,
        name: 'Kapildhara Falls',
        image: 'https://source.unsplash.com/random/600x400/?waterfall,forest',
        history: 'Ancient waterfall mentioned in Puranas where sage Kapil meditated. The falls are formed by Narmada tributaries.',
        significance: 'Sacred meditation site with natural beauty. The water is believed to have healing properties.',
        mapLink: 'https://goo.gl/maps/XYZ131'
      },
      {
        id: 10,
        name: 'Shri Yantra Temple',
        image: 'https://source.unsplash.com/random/600x400/?yantra,temple',
        history: 'Modern temple built to showcase the sacred geometry of Shri Yantra, aligned with Narmada energy lines.',
        significance: 'Unique temple where architecture follows sacred geometry patterns believed to harness cosmic energy.',
        mapLink: 'https://goo.gl/maps/XYZ132'
      }
    ],
    gujrat: [
      {
        id: 11,
        name: 'Sardar Sarovar Dam',
        image: 'https://source.unsplash.com/random/600x400/?dam,narmada',
        history: 'Modern engineering marvel built on Narmada river, completed after decades of planning and construction.',
        significance: 'While modern, it represents human interaction with the sacred river. Offers panoramic views of Narmada.',
        mapLink: 'https://goo.gl/maps/XYZ133'
      },
      {
        id: 12,
        name: 'Shoolpaneshwar Temple',
        image: 'https://source.unsplash.com/random/600x400/?shiva,temple',
        history: 'Ancient temple submerged and later relocated due to Sardar Sarovar project. Original temple dated back centuries.',
        significance: 'Dedicated to Lord Shiva, represents resilience of faith as the temple was relocated to preserve it.',
        mapLink: 'https://goo.gl/maps/XYZ134'
      },
      {
        id: 13,
        name: 'Rajpipla Palace',
        image: 'https://source.unsplash.com/random/600x400/?palace,river',
        history: 'Historic royal palace on Narmada banks built in early 20th century by the rulers of Rajpipla.',
        significance: 'Cultural heritage site showcasing royal connection to the Narmada river. Now a heritage hotel.',
        mapLink: 'https://goo.gl/maps/XYZ135'
      },
      {
        id: 14,
        name: 'Garudeshwar Temple',
        image: 'https://source.unsplash.com/random/600x400/?garuda,temple',
        history: 'Ancient temple dedicated to Lord Vishnus mount Garuda, located where Narmada meets the sea.',
        significance: 'Marking the end point of Narmadas journey, where the river meets the Arabian Sea.',
        mapLink: 'https://goo.gl/maps/XYZ136'
      },
      {
        id: 15,
        name: 'Nareshwar Hanuman Temple',
        image: 'https://source.unsplash.com/random/600x400/?hanuman,temple',
        history: 'Established by saint Dadhichi, this temple has been a spiritual center for centuries.',
        significance: 'Famous for its massive Hanuman statue and peaceful ashram atmosphere by Narmada riverside.',
        mapLink: 'https://goo.gl/maps/XYZ137'
      },
      {
        id: 16,
        name: 'Shuklatirth Temple',
        image: 'https://source.unsplash.com/random/600x400/?white,temple',
        history: 'Ancient temple mentioned in Puranas, known for its white marble construction.',
        significance: 'One of the five main tirthas (pilgrimage sites) along Narmada in Gujarat.',
        mapLink: 'https://goo.gl/maps/XYZ138'
      },
      {
        id: 17,
        name: 'Chandod Temple Complex',
        image: 'https://source.unsplash.com/random/600x400/?temple,complex',
        history: 'Group of ancient temples at the confluence of Narmada and Orsang rivers.',
        significance: 'Sacred confluence site with temples dedicated to various deities spanning centuries.',
        mapLink: 'https://goo.gl/maps/XYZ139'
      },
      {
        id: 18,
        name: 'Kabirvad',
        image: 'https://source.unsplash.com/random/600x400/?banyan,tree',
        history: 'Famous giant banyan tree associated with saint Kabir, who meditated here.',
        significance: 'Natural wonder and spiritual site where devotees meditate under the massive tree canopy.',
        mapLink: 'https://goo.gl/maps/XYZ140'
      },
      {
        id: 19,
        name: 'Bharuch Narmada Ghats',
        image: 'https://source.unsplash.com/random/600x400/?ghat,river',
        history: 'Ancient riverfront with ghats dating back to Indus Valley civilization times.',
        significance: 'Historical trading port and spiritual bathing site where Narmada widens before meeting the sea.',
        mapLink: 'https://goo.gl/maps/XYZ141'
      },
      {
        id: 20,
        name: 'Dediapada Sacred Groves',
        image: 'https://source.unsplash.com/random/600x400/?forest,narmada',
        history: 'Protected forest areas conserved by tribal communities for centuries.',
        significance: 'Ecological and spiritual heritage sites preserving biodiversity along Narmada.',
        mapLink: 'https://goo.gl/maps/XYZ142'
      }
    ]
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setIsDropdownOpen(false);
  };

  const handleExplore = (temple) => {
    setSelectedTemple(temple);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedTemple(null);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-black text-white">
      {/* Header */}
      <header className="py-6 px-4 text-center">
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-4"
        >
          <GiRiver className="text-blue-300 text-4xl mr-3" />
          <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-100">
            Narmada Temples Explorer
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-blue-200 max-w-2xl mx-auto"
        >
          Discover the sacred temples and spiritual sites along the holy Narmada river
        </motion.p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {!selectedTemple ? (
          <>
            {/* State Selector */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="relative max-w-xs mx-auto mb-12"
            >
              <div 
                className="flex items-center justify-between bg-blue-800 bg-opacity-50 border border-blue-600 rounded-lg px-4 py-3 cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-300 mr-2" />
                  <span className="font-medium">
                    {selectedState === 'madhayapradesh' ? 'Madhya Pradesh' : 'Gujarat'}
                  </span>
                </div>
                <MdExpandMore className={`transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
              </div>
              
              {isDropdownOpen && (
                <motion.div 
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="absolute z-10 w-full mt-1 bg-blue-900 border border-blue-700 rounded-lg shadow-lg"
                >
                  <div 
                    className="px-4 py-2 hover:bg-blue-800 cursor-pointer border-b border-blue-800"
                    onClick={() => handleStateChange('madhayapradesh')}
                  >
                    Madhya Pradesh
                  </div>
                  <div 
                    className="px-4 py-2 hover:bg-blue-800 cursor-pointer"
                    onClick={() => handleStateChange('gujrat')}
                  >
                    Gujarat
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Temples Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {templesData[selectedState].map((temple) => (
                <motion.div
                  key={temple.id}
                  variants={itemVariants}
                  whileHover="hover"
                  //variants={cardVariants}
                  className="relative rounded-xl overflow-hidden shadow-xl h-64"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${temple.image})` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <GiTempleGate className="text-blue-300 mr-2" />
                        <h3 className="text-xl font-bold text-white">{temple.name}</h3>
                      </div>
                      <div className="flex items-center text-blue-200 text-sm">
                        <FaMapMarkerAlt className="mr-1" />
                        <span>{selectedState === 'madhayapradesh' ? 'Madhya Pradesh' : 'Gujarat'}</span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 px-4 rounded-lg self-start flex items-center"
                      onClick={() => handleExplore(temple)}
                    >
                      <FaBook className="mr-2" />
                      Explore
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          /* Temple Detail View */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-4xl mx-auto bg-blue-900 bg-opacity-50 rounded-xl overflow-hidden shadow-2xl"
          >
            <div 
              className="h-64 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${selectedTemple.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-800 bg-opacity-70 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center self-start"
                  onClick={handleBack}
                >
                  &larr;
                </motion.button>
                <h2 className="text-3xl font-bold text-white">{selectedTemple.name}</h2>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-200 mb-3 flex items-center">
                  <FaBook className="mr-2" />
                  History
                </h3>
                <p className="text-blue-100">{selectedTemple.history}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-200 mb-3 flex items-center">
                  <FaBalanceScale className="mr-2" />
                  Significance
                </h3>
                <p className="text-blue-100">{selectedTemple.significance}</p>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                href={selectedTemple.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-lg"
              >
                <FaMapMarkerAlt className="mr-2" />
                View on Google Maps
              </motion.a>
            </div>
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-blue-300 border-t border-blue-800 mt-12">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center mb-4"
        >
          <FaTint className="text-blue-400 mr-2" />
          <p>Narmada Maiya Ki Jai</p>
        </motion.div>
        <p className="text-sm">Explore the spiritual heritage along the sacred Narmada river</p>
      </footer>
    </div>
  );
};

export default NarmadaTemples;