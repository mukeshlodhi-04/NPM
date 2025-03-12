import React from 'react';


const Home = () => {
  return (
    <div
    className="relative bg-cover bg-center h-screen"

    style={{
      backgroundImage: "url('/narmada.jpg')" ,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold mb-4">Welcome to Narmada Parikrama</h1>
        <p className="text-gray-300 text-lg mb-8">
          Embark on a sacred journey around the holy Narmada River, experiencing spiritual enlightenment and cultural richness.
        </p>
        <a
          href="/about"
          className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
);
};

export default Home;

