import React from 'react';
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
import { GiRiver, GiStonePath } from 'react-icons/gi';
import { MdCelebration } from 'react-icons/md';
import nkund from '../assets/naramdaKund.jpg';
import njayanti from '../assets/njayanti.jpg';
import SSdam from '../assets/SardarSarovarDam.jpg';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src="/narmada-banner.jpg" 
          alt="Narmada River" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sacred Narmada</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              The Lifeline of Central India - A River of Spirituality and Sustenance
            </p>
          </motion.div>
        </div>
      </div>

      {/* Origin Story Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-12 items-center"
        >
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <FaWater className="text-blue-600 text-3xl mr-4" />
              <h2 className="text-3xl font-bold">Origin Story</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              The Narmada River is one of the most sacred rivers in Hinduism, with profound spiritual significance. 
              According to the Rewa Khand of the Skanda Purana, the river emerged from a drop of Lord Shiva's sweat 
              while he was performing intense penance on the Vindhya mountains.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The river is considered a manifestation of Goddess Narmada herself, possessing extraordinary purifying 
              powers. Many believe her waters to be second only to the Ganges in holiness, with the unique distinction 
              that her pebbles (banalinga) naturally resemble Shiva lingams.
            </p>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
              <p className="italic text-gray-700">
                "Narmada ke kan kan me Shiva base hai" - Every pebble in Narmada contains Shiva
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={nkund} 
              alt="Narmada Origin at Amarkantak" 
              className="rounded-xl shadow-lg w-full"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              The sacred source of Narmada at Amarkantak, where the river begins her journey
            </p>
          </div>
        </motion.div>
      </section>

      {/* Parikrama Traditions Section */}
      <section className="py-16 bg-blue-50 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <GiStonePath className="text-blue-600 text-3xl mr-4" />
              <h2 className="text-3xl font-bold">Narmada Parikrama Traditions</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The sacred circumambulation of Mother Narmada follows ancient rules and practices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaRoute className="w-8 h-8 mb-4" />,
                title: "Path of the Journey",
                description: "Pilgrims walk keeping the river always to their right, never crossing it"
              },
              {
                icon: <FaBook className="w-8 h-8 mb-4" />,
                title: "Spiritual Practices",
                description: "Daily worship of Narmada Mata, visiting temples, and meditation along the banks"
              },
              {
                icon: <FaBalanceScale className="w-8 h-8 mb-4" />,
                title: "Minimalist Approach",
                description: "Carrying only essential supplies, often just enough for two days at a time"
              },
              {
                icon: <FaGopuram className="w-8 h-8 mb-4" />,
                title: "Sacred Sites",
                description: "Visiting important temples like Omkareshwar, Maheshwar, and Amarkantak"
              },
              {
                icon: <FaTint className="w-8 h-8 mb-4" />,
                title: "River Reverence",
                description: "Bathing in the river daily while avoiding soaps or oils to maintain purity"
              },
              {
                icon: <GiRiver className="w-8 h-8 mb-4" />,
                title: "Completion Rituals",
                description: "Traditional head shaving before starting and only cutting hair/nails after completing"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="text-blue-600">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narmada Jayanti Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row-reverse gap-12 items-center"
        >
          <div className="lg:w-1/2">
            <div className="flex items-center mb-6">
              <MdCelebration className="text-blue-600 text-3xl mr-4" />
              <h2 className="text-3xl font-bold">Narmada Jayanti</h2>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Celebrated on Shukla Paksha Saptami in the Magha month (February 4th in 2025), Narmada Jayanti 
              honors the sacred river's birth. Devotees believe bathing in the Narmada on this day purifies the 
              soul and brings peace and prosperity.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              The main celebrations occur at Amarkantak (the river's source) and other important ghats along 
              her course. Festivities include special aartis, bhajan sessions, religious discourses, and 
              community feasts.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Special pujas and homas performed at Narmada temples</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Devotees offer flowers, lamps, and prayers to the river</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Cultural programs showcasing traditional Narmadi songs and dances</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={njayanti} 
              alt="Narmada Jayanti Celebrations" 
              className="rounded-xl shadow-lg w-full"
            />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Devotees performing aarti during Narmada Jayanti celebrations at Omkareshwar
            </p>
          </div>
        </motion.div>
      </section>

      {/* River Development Section */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <FaIndustry className="text-blue-600 text-3xl mr-4" />
              <h2 className="text-3xl font-bold">River Development</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harnessing Narmada's potential while balancing ecological concerns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Water Resources</h3>
              <p className="text-gray-700 mb-4">
                The Narmada basin spans 98,796 sq km (3% of India's area) with an average annual flow of 
                40.96 km³ - more than the combined flows of Ravi, Beas, and Sutlej rivers. This immense 
                potential is harnessed through:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Sardar Sarovar Dam</strong> - World's second largest concrete dam providing irrigation to Gujarat and Rajasthan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Narmada Canal</strong> - 532 km network bringing water to arid regions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Indirasagar Dam</strong> - India's largest reservoir with 12.22 km³ capacity</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">Balancing Development</h3>
              <p className="text-gray-700 mb-4">
                The Narmada Valley Development Project has been both celebrated and contested:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Benefits:</strong> Irrigation for 1.8 million hectares, drinking water for 30 million, 1450 MW hydropower</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Challenges:</strong> Displacement of 200,000+ people, ecological impacts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Narmada Bachao Andolan</strong> brought global attention to rehabilitation issues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Supreme Court</strong> interventions established monitoring mechanisms</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 bg-blue-800 text-white p-8 rounded-xl"
          >
            <div className="md:w-1/2">
              <img 
                src={SSdam}
                alt="Sardar Sarovar Dam" 
                className="rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Modern Narmada</h3>
              <p className="mb-4">
                Today, the Narmada serves dual roles - as a sacred pilgrimage route and a vital resource for 
                western India's development. The river's management continues to evolve with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">•</span>
                  <span>Improved rehabilitation policies for displaced communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">•</span>
                  <span>Ecological flow requirements to maintain river health</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">•</span>
                  <span>Integration of traditional water management practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-200 mr-2">•</span>
                  <span>Promotion of sustainable tourism along the river</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Thought */}
      <section className="py-16 px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <GiRiver className="text-blue-600 text-5xl mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Narmada - More Than a River</h2>
          <p className="text-xl text-gray-700 mb-6">
            The Narmada represents the perfect confluence of spirituality and sustenance, tradition and 
            modernity, ecology and development. She continues to nurture both the souls and the soils 
            of central India, remaining as relevant today as in ancient times.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 max-w-2xl mx-auto">
            <p className="italic text-gray-700">
              "Narmada ki yatra sirf ek ghum nahi, ek anubhav hai"<br />
              - The Narmada journey isn't just a trip, it's an experience
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;