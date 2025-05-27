import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaInfoCircle, FaWater, FaMountain } from "react-icons/fa";
import { MdTempleHindu } from 'react-icons/md';
import { WiDaySunny, WiRain, WiCloudy } from "weather-icons-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Npmap from '../assets/Npmap.jpg';
import amarkantak from '../assets/amarkantak.jpg';
const Route = () => {
  const mapRef = useRef(null);
  const [activePlace, setActivePlace] = useState(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [weatherData, setWeatherData] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(false);

  // Enhanced route data with more places along the Narmada coast
  const places = [
    {
      id: 1,
      name: "Amarkantak (Start)",
      coords: [22.6776, 81.7575],
      description: "The sacred origin of Narmada River where it emerges from the Maikal Hills. Home to ancient temples like Narmada Udgam Temple and Kapildhara Falls.",
      duration: "2-3 days",
      state: "Madhya Pradesh",
      language: "Hindi",
      image: {amarkantak},
      significance: "Narmada Udgam Temple (Main shrine at river source), Kapildhara Temple, Shri Yantra Mandir, Ancient temples of Kalachuri period"
    },
    {
      id: 2,
      name: "Dindori",
      coords: [22.95, 81.0833],
      description: "Gateway to tribal heartland with rich cultural heritage. Known for its waterfalls and dense forests.",
      duration: "1 day",
      state: "Madhya Pradesh",
      language: "Hindi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Shri Siddheshwar Mahadev Temple, Ancient Shiva temples along the river banks"
    },
    {
      id: 3,
      name: "Shahdol",
      coords: [23.2833, 81.35],
      description: "Important stop with several ancient temples and beautiful landscapes.",
      duration: "1 day",
      state: "Madhya Pradesh",
      language: "Hindi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Badi Mai Temple, Jwaleshwar Mahadev Temple"
    },
    {
      id: 4,
      name: "Bhedaghat",
      coords: [23.1328, 79.8007],
      description: "Famous for Dhuandhar Falls and the stunning Marble Rocks.",
      duration: "1 day",
      state: "Madhya Pradesh",
      language: "Hindi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Chaausath Yogini Temple (10th century), Chausath Yogini Temple"
    },
    {
      id: 5,
      name: "Hoshangabad",
      coords: [22.75, 77.7167],
      description: "Historical town with beautiful riverfront and several temples.",
      duration: "1 day",
      state: "Madhya Pradesh",
      language: "Hindi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Sethani Ghat, Shri Ram Temple, Bandrabhan Temple"
    },
    {
      id: 6,
      name: "Omkareshwar",
      coords: [22.2410, 76.1520],
      description: "One of the 12 Jyotirlingas of Lord Shiva, situated on an island shaped like Om symbol.",
      duration: "2 days",
      state: "Madhya Pradesh",
      language: "Hindi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Omkareshwar Jyotirlinga, Mamleshwar Temple"
    },
    {
      id: 7,
      name: "Maheshwar",
      coords: [22.1741, 75.5872],
      description: "Historic town with beautiful ghats and the magnificent Maheshwar Fort.",
      duration: "1 day",
      state: "Madhya Pradesh",
      language: "Hindi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Kaleshwar Temple, Rajarajeshwara Temple, Ahilya Fort Temple"
    },
    {
      id: 8,
      name: "Mandleshwar",
      coords: [22.1750, 75.6667],
      description: "Ancient town with beautiful temples and ghats along the Narmada.",
      duration: "1 day",
      state: "Madhya Pradesh",
      language: "Hindi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Narmada Temple, Ancient Shiva temples"
    },
    {
      id: 9,
      name: "Barwani",
      coords: [22.0333, 74.9],
      description: "Scenic town with several ancient temples along the river banks.",
      duration: "1 day",
      state: "Madhya Pradesh",
      language: "Hindi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Shri Narmada Temple, Ancient Shiva temples"
    },
    {
      id: 10,
      name: "Rajpipla",
      coords: [21.8667, 73.5],
      description: "Former princely state with beautiful palaces.",
      duration: "1 day",
      state: "Gujarat",
      language: "Gujarati",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Shri Narmada Temple, Rajpipla Palace Temple"
    },
    {
      id: 11,
      name: "Zarwani Waterfall",
      coords: [21.8, 73.3],
      description: "Beautiful waterfall considered sacred along the Narmada route.",
      duration: "Half day",
      state: "Gujarat",
      language: "Gujarati",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Small shrine near the waterfall dedicated to Narmada Maiya"
    },
    {
      id: 12,
      name: "Bharuch",
      coords: [21.7051, 72.9959],
      description: "Ancient port city where Narmada meets the Arabian Sea.",
      duration: "1 day",
      state: "Gujarat",
      language: "Gujarati",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Shuklatirth Temple, Bhrigu Rishi Temple"
    },
    {
      id: 13,
      name: "Amarkantak (End)",
      coords: [22.6776, 81.7575],
      description: "Completion of the sacred parikrama.",
      duration: "2-3 days",
      state: "Madhya Pradesh",
      language: "Hindi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      significance: "Final rituals at Narmada Udgam Temple"
    }
  ];

  // More detailed river path coordinates
  const riverPath = [
    [22.6776, 81.7575], // Amarkantak
    [22.7, 81.6],
    [22.8, 81.4],
    [22.95, 81.0833], // Dindori
    [23.0, 80.9],
    [23.1, 80.7],
    [23.2833, 81.35], // Shahdol
    [23.2, 80.8],
    [23.1328, 79.8007], // Bhedaghat
    [23.0, 79.5],
    [22.9, 79.0],
    [22.8, 78.5],
    [22.75, 77.7167], // Hoshangabad
    [22.7, 77.5],
    [22.6, 77.0],
    [22.5, 76.8],
    [22.4, 76.6],
    [22.2410, 76.1520], // Omkareshwar
    [22.2, 75.9],
    [22.1741, 75.5872], // Maheshwar
    [22.1750, 75.6667], // Mandleshwar
    [22.1, 75.4],
    [22.0333, 74.9], // Barwani
    [21.95, 74.5],
    [21.8667, 73.5], // Rajpipla
    [21.8, 73.3], // Zarwani
    [21.75, 73.1],
    [21.7051, 72.9959], // Bharuch
  ];

  // Fetch weather data
  const fetchWeather = async (lat, lon) => {
    setLoadingWeather(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=20294375f8d92ed67ad1bbd4b5cf7873&units=metric`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    } finally {
      setLoadingWeather(false);
    }
  };

  // Initialize map
  useEffect(() => {
    if (!mapRef.current) {
      // Create map
      mapRef.current = L.map("map", {
        center: [22.5, 78],
        zoom: 6,
        zoomControl: false,
        preferCanvas: true
      });

      // Add simple OpenStreetMap layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Add highlighted river path with blue color
      L.polyline(riverPath, {
        color: '#1e40af',
        weight: 6,
        opacity: 0.9,
        lineJoin: 'round',
        dashArray: '5, 5'
      }).addTo(mapRef.current).bringToFront();

      // Add route polyline
      const routePoints = places.map(place => place.coords);
      L.polyline(routePoints, {
        color: '#3b82f6',
        weight: 3,
        opacity: 0.9,
        dashArray: '10, 10'
      }).addTo(mapRef.current);

      // Custom marker icons with smaller size
      const startIcon = L.divIcon({
        html: `<div class="animate-pulse bg-green-500 text-white rounded-full p-1 shadow-lg border-2 border-white text-xs">Start</div>`,
        className: '',
        iconSize: [30, 30]
      });

      const endIcon = L.divIcon({
        html: `<div class="animate-pulse bg-red-500 text-white rounded-full p-1 shadow-lg border-2 border-white text-xs">End</div>`,
        className: '',
        iconSize: [30, 30]
      });

      const defaultIcon = L.divIcon({
        html: `<div class="bg-blue-500 text-white rounded-full p-1 shadow-lg border-2 border-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
              </div>`,
        className: '',
        iconSize: [24, 24]
      });

      // Add markers with custom icons
      places.forEach((place, index) => {
        const icon = index === 0 ? startIcon : 
                    index === places.length - 1 ? endIcon : 
                    defaultIcon;

        const marker = L.marker(place.coords, { icon })
          .addTo(mapRef.current)
          .bindPopup(`
            <div class="w-64">
              <h3 class="font-bold text-lg">${place.name}</h3>
              <p class="text-sm text-gray-600">${place.state}</p>
              <img src="${place.image}" alt="${place.name}" class="w-full h-24 object-cover mt-2 rounded">
              <p class="text-sm mt-2">${place.description.substring(0, 100)}...</p>
            </div>
          `);
        
        marker.on("click", () => {
          setActivePlace(place);
          fetchWeather(place.coords[0], place.coords[1]);
        });
      });

      // Add zoom control
      L.control.zoom({ position: 'topright' }).addTo(mapRef.current);
    }
  }, []);

  // Center map when active place changes
  useEffect(() => {
    if (activePlace && mapRef.current) {
      mapRef.current.setView(activePlace.coords, 12);
    }
  }, [activePlace]);

  // Render weather icon based on conditions
  const renderWeatherIcon = () => {
    if (!weatherData) return null;
    
    const weather = weatherData.weather[0].main.toLowerCase();
    const temp = Math.round(weatherData.main.temp);
    
    let icon;
    if (weather.includes('rain')) {
      icon = <WiRain size={48} className="text-blue-500" />;
    } else if (weather.includes('cloud')) {
      icon = <WiCloudy size={48} className="text-gray-500" />;
    } else {
      icon = <WiDaySunny size={48} className="text-yellow-500" />;
    }
    
    return (
      <div className="flex items-center">
        {icon}
        <span className="ml-2 text-xl font-medium">{temp}°C</span>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${showSidebar ? 'w-full md:w-96' : 'w-0'} bg-gradient-to-b from-blue-50 to-white shadow-xl transition-all duration-300 overflow-hidden z-10`}>
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-blue-800">Narmada Parikrama</h1>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
              2600 km
            </span>
          </div>
          
          <div className="mb-6">
            <img 
              src={Npmap}
              alt="Narmada Parikrama Route" 
              className="w-full h-auto rounded-lg shadow-sm border border-gray-200"
            />
            <p className="text-gray-700 text-sm mt-2">
              The Narmada Parikrama is a sacred circumambulation of the Narmada River. 
              Pilgrims walk the entire length from source to sea and back, covering approximately 2600km through MP and Gujarat.
            </p>
          </div>

          <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center mb-2">
              <FaWater className="text-blue-500 mr-2" />
              <h2 className="text-lg font-semibold text-gray-800">River Information</h2>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-gray-500">Length</p>
                <p className="font-medium">1,312 km</p>
              </div>
              <div>
                <p className="text-gray-500">States</p>
                <p className="font-medium">MP, Gujarat</p>
              </div>
              <div>
                <p className="text-gray-500">Source</p>
                <p className="font-medium">Amarkantak</p>
              </div>
              <div>
                <p className="text-gray-500">Mouth</p>
                <p className="font-medium">Arabian Sea</p>
              </div>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
            <FaMapMarkerAlt className="text-blue-500 mr-2" />
            Route Highlights
          </h2>
          <div className="space-y-3">
            {places.map(place => (
              <div 
                key={place.id}
                className={`p-3 rounded-lg cursor-pointer transition-all ${activePlace?.id === place.id ? 'bg-blue-100 border-l-4 border-blue-600' : 'bg-white hover:bg-blue-50'}`}
                onClick={() => {
                  setActivePlace(place);
                  fetchWeather(place.coords[0], place.coords[1]);
                }}
              >
                <div className="flex justify-between">
                  <h3 className="font-medium text-blue-700">{place.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {place.duration}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-1">{place.state} ({place.language})</p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{place.coords[0].toFixed(4)}, {place.coords[1].toFixed(4)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <div id="map" className="h-full w-full"></div>
        
        {/* Toggle sidebar button */}
        <button 
          onClick={() => setShowSidebar(!showSidebar)}
          className="absolute top-4 left-4 md:left-auto md:right-4 bg-white p-3 rounded-full shadow-lg z-20 hover:bg-gray-100 transition"
        >
          {showSidebar ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        {/* Active place card with higher z-index */}
        {activePlace && (
          <div className="absolute bottom-4 left-4 right-4 md:right-auto md:w-96 bg-white p-6 rounded-xl shadow-2xl z-1000 border border-gray-200">
            <button 
              onClick={() => setActivePlace(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-800">{activePlace.name}</h3>
                <div className="flex items-center mt-1 text-sm text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{activePlace.state} ({activePlace.language})</span>
                </div>
                
                {loadingWeather ? (
                  <div className="mt-3 h-12 flex items-center">
                    <div className="animate-pulse bg-gray-200 h-4 w-24 rounded"></div>
                  </div>
                ) : (
                  <div className="mt-3">
                    {renderWeatherIcon()}
                  </div>
                )}
              </div>
              
              <div className="ml-4 w-20 h-20 rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src={activePlace.image} 
                  alt={activePlace.name} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-1 flex items-center">
                <MdTempleHindu className="text-blue-500 mr-2" />
                Main Temples & Significance
              </h4>
              <p className="text-sm text-gray-600">{activePlace.significance}</p>
            </div>
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Details</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-gray-500">Coordinates</p>
                  <p className="font-medium">{activePlace.coords[0].toFixed(4)}, {activePlace.coords[1].toFixed(4)}</p>
                </div>
                <div>
                  <p className="text-gray-500">Recommended Stay</p>
                  <p className="font-medium">{activePlace.duration}</p>
                </div>
                <div>
                  <p className="text-gray-500">State</p>
                  <p className="font-medium">{activePlace.state}</p>
                </div>
                <div>
                  <p className="text-gray-500">Language</p>
                  <p className="font-medium">{activePlace.language}</p>
                </div>
              </div>
            </div>
            
            <button 
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition"
              onClick={() => {
                window.open(`https://www.google.com/maps?q=&layer=c&cbll=${activePlace.coords[0]},${activePlace.coords[1]}`, '_blank');
              }}
            >
              View 3D Street View
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Route;