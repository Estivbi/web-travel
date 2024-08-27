import React, {useState} from 'react';
import './App.css';
import HighlandsMap from './components/HighlandsMap';
import Footer from './components/Footer';
import { FaSun, FaMoon } from 'react-icons/fa';

const routes = [
  {
    title: "De Edimburgo a Fort William",
    stops: [
      { name: "Edimburgo", coordinates: [﻿55.953333333333, -3.1891666666667] },
      { name: "Stirling", coordinates: [56.116666666667, -3.95] },
      { name: "Glencoe", coordinates: [56.6825, -5.1027777777778] },
      { name: "Fort William", coordinates: [56.819817, -5.105218] },
     
    ],
  },
  {
    title: "De Fort William a Inverness",
    stops: [
      { name: "Fort William", coordinates: [56.819817, -5.105218] },
      { name: "Inverness", coordinates: [57.477772, -4.224721] },
    ],
  },
  
{
    title: "De Inverness a Edimburgo",
    stops: [
      { name: "Inverness", coordinates: [57.477772, -4.224721] },
      { name: "Pitlochry", coordinates: [56.704722222222, -3.7297222222222] },
      { name: "Edimburgo", coordinates: [﻿55.953333333333, -3.1891666666667] },
    ],
},

{
  title: "De Inverness a Edimburgo",
  stops: [
    { name: "Inverness", coordinates: [57.477772, -4.224721] },
    { name: "Pitlochry", coordinates: [56.704722222222, -3.7297222222222] },
    { name: "Edimburgo", coordinates: [﻿55.953333333333, -3.1891666666667] },
  ],
},

{
  title: "De Inverness a Edimburgo",
  stops: [
    { name: "Inverness", coordinates: [57.477772, -4.224721] },
    { name: "Pitlochry", coordinates: [56.704722222222, -3.7297222222222] },
    { name: "Edimburgo", coordinates: [﻿55.953333333333, -3.1891666666667] },
  ],
},
  // Añadir más rutas

];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  }
  return (
    <div className={`App ${darkMode ? 'dark-mode' : ' ' }`}>
       <button className='dark-mode-toggle' onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <div className="content">
        <h1>Mi Viaje a las Highlands Escocesas</h1>
        <HighlandsMap routes={routes} />
      </div>
      <Footer />
    </div>

         
  );
}

export default App;
