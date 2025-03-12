import React from "react";

const temples = {
  mp: [
    {
      id: 1,
      title: "Omkareshwar Temple",
      location: "Khandwa, Madhya Pradesh",
      photo: "https://source.unsplash.com/400x300/?omkareshwar,temple",
      description:
        "One of the 12 Jyotirlingas, Omkareshwar Temple is located on the Mandhata Island in the Narmada River. It is a significant pilgrimage site with a spiritual atmosphere and scenic beauty.",
    },
    {
      id: 2,
      title: "Maheshwar Fort & Temples",
      location: "Maheshwar, Madhya Pradesh",
      photo: "https://source.unsplash.com/400x300/?maheshwar,fort",
      description:
        "Known for its beautiful ghats and the Maheshwar Fort, this place was once ruled by Rani Ahilyabai Holkar. It is famous for its intricate temples and serene views of the Narmada River.",
    },
    {
      id: 3,
      title: "Amarkantak",
      location: "Anuppur, Madhya Pradesh",
      photo: "https://source.unsplash.com/400x300/?amarkantak,hills",
      description:
        "The origin of the Narmada River, Amarkantak is a holy town surrounded by lush green hills, waterfalls, and ancient temples, making it a spiritual and scenic destination.",
    },
  ],
  gujarat: [
    {
      id: 4,
      title: "Shoolpaneshwar Temple",
      location: "Narmada District, Gujarat",
      photo: "https://source.unsplash.com/400x300/?gujarat,temple",
      description:
        "An ancient Shiva temple located near the Sardar Sarovar Dam. It is a peaceful place surrounded by dense forests and natural beauty.",
    },
    {
      id: 5,
      title: "Sardar Sarovar Dam & Statue of Unity",
      location: "Kevadia, Gujarat",
      photo: "https://source.unsplash.com/400x300/?statue-of-unity",
      description:
        "The Statue of Unity, the world's tallest statue, stands near the Narmada River, offering breathtaking views of the dam and surrounding landscape.",
    },
    {
      id: 6,
      title: "Kabirvad",
      location: "Bharuch, Gujarat",
      photo: "https://source.unsplash.com/400x300/?river,island",
      description:
        "A serene island on the Narmada River, believed to be the meditation site of Saint Kabir. The place is famous for its giant Banyan tree covering several acres.",
    },
  ],
  maharashtra: [
    {
      id: 7,
      title: "Trimbakeshwar Temple",
      location: "Nashik, Maharashtra",
      photo: "https://source.unsplash.com/400x300/?trimbakeshwar,temple",
      description:
        "One of the 12 Jyotirlingas, Trimbakeshwar Temple is a sacred Shiva temple with unique architecture and deep spiritual significance.",
    },
    {
      id: 8,
      title: "Narmada River Ghat at Mandleshwar",
      location: "Mandleshwar, Maharashtra",
      photo: "https://source.unsplash.com/400x300/?narmada,ghat",
      description:
        "Mandleshwar is known for its beautiful ghats on the Narmada River. It is a peaceful location where devotees and tourists come to meditate and enjoy the scenic beauty.",
    },
    {
      id: 9,
      title: "Ajanta & Ellora Caves",
      location: "Aurangabad, Maharashtra",
      photo: "https://source.unsplash.com/400x300/?ajanta,ellora,caves",
      description:
        "Though not directly on the Narmada, the Ajanta and Ellora caves are stunning ancient rock-cut temples and sculptures depicting India's rich history and artistry.",
    },
  ],
};

const Temple = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Temples & Sacred Places Along Narmada
      </h1>

      {Object.entries(temples).map(([state, places]) => (
        <div key={state} className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-700 capitalize mb-6">
            {state === "mp" ? "Madhya Pradesh" : state === "gujarat" ? "Gujarat" : "Maharashtra"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place) => (
              <div key={place.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={place.photo} alt={place.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{place.title}</h3>
                  <p className="text-gray-600 mb-2">{place.location}</p>
                  <p className="text-gray-700">{place.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Temple;
