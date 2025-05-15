import React from "react";
import { FaMapMarkerAlt, FaHistory, FaImage, FaInfoCircle } from "react-icons/fa";

const Routes = () => {
  // Sample data for Narmada Parikrama routes
  const places = [
    {
      id: 1,
      name: "Omkareshwar",
      history: "Omkareshwar is one of the 12 Jyotirlingas and is located on an island in the Narmada River. It is believed to be the place where Lord Shiva manifested as a Jyotirlinga.",
      location: "Khandwa District, Madhya Pradesh",
      photo: "https://source.unsplash.com/400x300/?omkareshwar,temple",
      mapLink: "https://goo.gl/maps/XYZ123",
    },
    {
      id: 2,
      name: "Maheshwar",
      history: "Maheshwar is a historic town known for its beautiful ghats and the Maheshwar Fort. It was the capital of the Malwa kingdom under Queen Ahilyabai Holkar.",
      location: "Khargone District, Madhya Pradesh",
      photo: "https://source.unsplash.com/400x300/?maheshwar,ghat",
      mapLink: "https://goo.gl/maps/ABC456",
    },
    {
      id: 3,
      name: "Bhedaghat",
      history: "Bhedaghat is famous for its marble rocks and the Dhuandhar Falls. The Narmada River flows through a gorge of marble rocks, creating a breathtaking view.",
      location: "Jabalpur District, Madhya Pradesh",
      photo: "https://source.unsplash.com/400x300/?bhedaghat,marble-rocks",
      mapLink: "https://goo.gl/maps/DEF789",
    },
    {
      id: 4,
      name: "Amarkantak",
      history: "Amarkantak is the source of the Narmada River and is considered a sacred pilgrimage site. It is surrounded by lush forests and is known for its temples and natural beauty.",
      location: "Anuppur District, Madhya Pradesh",
      photo: "https://source.unsplash.com/400x300/?amarkantak,temple",
      mapLink: "https://goo.gl/maps/GHI012",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Narmada Parikrama Routes
      </h1>

      {/* Overview Section */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">
          About Narmada Parikrama
        </h2>
        <div className="flex items-center mb-4 text-blue-600">
          <FaInfoCircle className="mr-2" />
          <p className="font-medium">Key Aspects of the Narmada Parikrama Route:</p>
        </div>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Starting Point:</strong> Amarkantak, located in the Maikal Hills of Madhya Pradesh, where the Narmada River originates.</li>
          <li><strong>Southern Bank:</strong> The Parikrama generally follows the southern bank of the river, with pilgrims walking along the river's edge.</li>
          <li><strong>Ending Point:</strong> The journey concludes at the Narmada River's mouth in Bharuch, Gujarat, where it flows into the Arabian Sea.</li>
          <li><strong>Duration:</strong> The Parikrama can vary in length (typically 3,800 km) depending on individual pace, but it's typically a multi-week or multi-month pilgrimage.</li>
          <li><strong>Rituals and Traditions:</strong> Pilgrims often walk barefoot, avoid crossing the river, and maintain strict discipline and celibacy during the Parikrama.</li>
          <li><strong>Stays:</strong> Pilgrims often stay in ashrams, dharamshalas, or with local villagers, relying on alms and generosity for sustenance.</li>
        </ul>
        
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Specific Locations Along the Route:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Madhya Pradesh:</h4>
              <p>The journey starts in Amarkantak and traverses through various towns and villages including Dindori, Mandla, Jabalpur, Omkareshwar, and Maheshwar.</p>
            </div>
            <div>
              <h4 className="font-medium">Gujarat:</h4>
              <p>The Parikrama continues into Gujarat, passing through towns like Badwani, Sardar Sarovar, Karjan, and ultimately reaching Bharuch.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Integration */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Explore the Narmada Parikrama Route
        </h2>
        
        {/* Interactive Route Map */}
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg mb-6">
          <div style={{overflow:'hidden',position:'relative'}}>
            <div style={{position:'relative',width:'100%',paddingTop:'56.25%',overflow:'visible'}}/>
            <iframe 
              name="plotaroute_map_532035" 
              src="https://www.plotaroute.com/embedmap/532035?units=km" 
              style={{position:'absolute',top:0,left:0,bottom:0,right:0,width:'100%', height:'100%'}} 
              frameBorder="0" 
              scrolling="no" 
              allowFullScreen 
              webkitallowfullscreen="true" 
              mozallowfullscreen="true" 
              oallowfullscreen="true" 
              msallowfullscreen="true"
              title="Narmada Parikrama Route Map"
            ></iframe>
          </div>
        </div>
        
        {/* Additional Map Image */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://files.mapinside.in/mapinside/maps/2025/04/narmada-parikrama-route-map-thumb.webp" 
            alt="Narmada Parikrama Route Map" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Detailed Route Guide */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Detailed Narmada Parikrama Guide
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Northern Bank Guide */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Northern Bank Route (Mithi Talai to Amarkantak)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Mithi Talai — Swagaon (30 km)</h4>
                <p className="text-sm">[Mithi Talai – Hari Dham – Lakhi Gaon – Dahaj – Ametha – Swagaon]</p>
                <p className="text-sm mt-1">Places of interest: Limbaeswr Mahadev, Sukhdev Ashram, Mahalakshmi temple</p>
              </div>
              <div>
                <h4 className="font-medium">Swagaon — Bharbhut (40 km)</h4>
                <p className="text-sm">[Swagaon – koliad – Begni – Kaladra – Kesrol – Amaleswar – Eksal – Manad – Mehagaon – Samni – Bharbhut]</p>
              </div>
              {/* Add more route segments as needed */}
            </div>
          </div>
          
          {/* Southern Bank Guide */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Southern Bank Route (Amarkantak to Kathpore)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Amarkantak — Mohotra (50 km)</h4>
                <p className="text-sm">[Narmada kund – Kabir Chatubra – Karamondal – Karanjia – Amaldehi – Rusha – Gorokhpur]</p>
                <p className="text-sm mt-1">Places of interest: Kabir temple, Gorokhnath temple</p>
              </div>
              <div>
                <h4 className="font-medium">Mohotra — Dindori (40 km)</h4>
                <p className="text-sm">[Mohotra – Gadasarai – Bondorgaon – Suniamar – Khargona – Kunda – Kukramath – Binchai Road – Dindori]</p>
              </div>
              {/* Add more route segments as needed */}
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Important Notes:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>The complete Narmada Parikrama covers approximately 3,800 km.</li>
            <li>Pilgrims typically walk barefoot and follow strict spiritual disciplines.</li>
            <li>There are two main routes - Northern Bank (Mithi Talai to Amarkantak) and Southern Bank (Amarkantak to Kathpore).</li>
            <li>The journey can take several months to complete depending on pace and stops.</li>
          </ul>
        </div>
      </div>

      {/* Places Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Main Places Along the Narmada Parikrama
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={place.photo}
                alt={place.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {place.name}
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaMapMarkerAlt className="mr-2" />
                  <p>{place.location}</p>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <FaHistory className="mr-2" />
                  <p className="text-sm">{place.history}</p>
                </div>
                <a
                  href={place.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  <FaImage className="mr-2" />
                  View on Map
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Routes;