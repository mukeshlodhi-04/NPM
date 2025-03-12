import React from "react";
import { FaMapMarkerAlt, FaHistory, FaImage } from "react-icons/fa";

const Routes = () => {
  // Sample data for Narmada Parikrama routes
  const places = [
    {
      id: 1,
      name: "Omkareshwar",
      history:
        "Omkareshwar is one of the 12 Jyotirlingas and is located on an island in the Narmada River. It is believed to be the place where Lord Shiva manifested as a Jyotirlinga.",
      location: "Khandwa District, Madhya Pradesh",
      photo: "https://source.unsplash.com/400x300/?omkareshwar,temple",
      mapLink: "https://goo.gl/maps/XYZ123",
    },
    {
      id: 2,
      name: "Maheshwar",
      history:
        "Maheshwar is a historic town known for its beautiful ghats and the Maheshwar Fort. It was the capital of the Malwa kingdom under Queen Ahilyabai Holkar.",
      location: "Khargone District, Madhya Pradesh",
      photo: "https://source.unsplash.com/400x300/?maheshwar,ghat",
      mapLink: "https://goo.gl/maps/ABC456",
    },
    {
      id: 3,
      name: "Bhedaghat",
      history:
        "Bhedaghat is famous for its marble rocks and the Dhuandhar Falls. The Narmada River flows through a gorge of marble rocks, creating a breathtaking view.",
      location: "Jabalpur District, Madhya Pradesh",
      photo: "https://source.unsplash.com/400x300/?bhedaghat,marble-rocks",
      mapLink: "https://goo.gl/maps/DEF789",
    },
    {
      id: 4,
      name: "Amarkantak",
      history:
        "Amarkantak is the source of the Narmada River and is considered a sacred pilgrimage site. It is surrounded by lush forests and is known for its temples and natural beauty.",
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

      {/* Map Integration */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Explore the Narmada River on the Map
        </h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Narmada River Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37494223.89909452!2d73.72502453750001!3d22.723919700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39667381d35aea3d%3A0x654f5f8a9f4b4f4f!2sNarmada%20River!5e0!3m2!1sen!2sin!4v1691234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
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