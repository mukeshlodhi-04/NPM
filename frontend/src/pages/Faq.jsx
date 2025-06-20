import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What is the Narmada Yatra?",
    answer:
      "The Narmada Yatra is a spiritual journey that involves circumambulating the Narmada River, typically by foot, covering both banks of the river. It is considered one of the most sacred pilgrimages in Hinduism, believed to cleanse sins and bestow divine blessings.",
  },
  {
    question: "How long does the Narmada Parikrama take?",
    answer:
      "The complete Narmada Parikrama (circumambulation) covers approximately 2,600 km and usually takes between 3 to 6 months on foot. Some devotees complete it in shorter durations using vehicles, but walking is considered more auspicious.",
  },
  {
    question: "What is the best time to undertake the Narmada Parikrama?",
    answer:
      "The ideal time is between **October to March** (post-monsoon) when the weather is pleasant. Summers (April-June) are extremely hot, and monsoons (July-September) make riverbanks slippery and dangerous.",
  },
  {
    question: "What should I carry during the yatra?",
    answer:
      "Essential items include: \n- Lightweight clothing (cotton for summer, woolen for winter) \n- Sturdy footwear \n- Water purifiers/tablets \n- Dry fruits & energy bars \n- First-aid kit (medicines for fever, diarrhea, pain relief) \n- ID proofs (Aadhar, Pilgrimage pass if required) \n- Mobile phone with portable charger",
  },
  {
    question: "Is accommodation available on the route?",
    answer:
      "Yes, options include: \n- **Dharamshalas** (free/low-cost lodges near temples) \n- **Ashrams** (e.g., Omkareshwar, Maheshwar) \n- **Temple stays** (Donations appreciated) \n- Budget hotels in towns like Jabalpur, Hoshangabad. **Pro Tip:** Carry a sleeping bag for remote stretches.",
  },
  {
    question: "Is the Narmada Yatra safe for solo travelers?",
    answer:
      "Generally safe, but precautions are advised: \n- Avoid isolated areas after dark \n- Join pilgrim groups for risky stretches \n- Share live location with family \n- Keep emergency contacts (Local police: 100, Narmada Seva Samiti helplines)",
  },
  {
    question: "Are there any rituals to follow during the Parikrama?",
    answer:
      "Key rituals include: \n- **Morning Snan (Holy dip)** in Narmada at sunrise \n- **Pradakshina (Circumambulation)** of major temples en route \n- **Daan (Charity)** to local priests/saints \n- **Mantra Jaap** (Chanting of 'Om Namah Shivaya' or Narmada Ashtakam)",
  },
  {
    question: "Which are the key temples to visit during the Parikrama?",
    answer:
      "Must-visit shrines: \n- **Omkareshwar Jyotirlinga** \n- **Maheshwar Temple** (Ahilya Bai’s legacy) \n- **Shukleshwar & Chaubis Avatar Temples** \n- **Bhedaghat’s Chaunsath Yogini Temple** \n- **Amarkantak (Narmada’s origin)**",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 py-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl shadow-lg">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-10 text-blue-800"
      >
        Narmada Parikrama FAQs
      </motion.h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="border border-blue-100 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
            >
              <h3 className="text-lg md:text-xl font-semibold text-blue-900">
                {faq.question}
              </h3>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                className="ml-4 text-blue-600 text-2xl"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5"
                >
                  <div className="text-gray-700 whitespace-pre-line">
                    {faq.answer}
                  </div>
                  {index === 3 && ( // Example: Add a tip for packing
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                      <span className="font-medium">Pro Tip:</span> Pack light! Many pilgrims send excess luggage ahead via courier to ashrams.
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center text-blue-600"
      >
        <p>Still have questions? Contact at <strong>+91-8819904733</strong></p>
      </motion.div>
    </div>
  );
};

export default Faq;