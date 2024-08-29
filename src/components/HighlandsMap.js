import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import { motion, AnimatePresence } from "framer-motion";
import "leaflet/dist/leaflet.css";
import AnimatedMarker from "./AnimatedMarker";
import carIconMaker from "../img/car.png";

// Corregir el problema del icono de marcador
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

const HighlandsMap = ({ routes }) => {
  const [activeDay, setActiveDay] = useState(0)
  const center = [55.91681478551552, -3.252800783318812] // Coordenadas aproximadas del centro de las Highlands

  // Verificar que routes y activeDay tengan datos válidos
  if (!routes || routes.length === 0) {
    return <div>No hay datos disponibles para mostrar el mapa.</div>
  }

  if (!routes[activeDay] || !routes[activeDay].stops) {
    return <div>No hay datos disponibles para el día seleccionado.</div>
  }

  // Crear un icono personalizado para los marcadores
  const carIcon = new L.Icon({
    iconUrl: carIconMaker,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -10],
  })

  const positions = routes[activeDay].stops
    .map(stop => stop.coordinates)
    .filter(coord => coord && coord.lat !== null && coord.lng !== null)

  return (
    <div className="container">
      <div className="header-container">
        <div className="buttons">
          {routes.map((route, index) => (
            <button key={index} onClick={() => setActiveDay(index)}>
              Día {index + 1}
            </button>
          ))}
        </div>
      
      <div className="title-container">
        <h2>Día {activeDay + 1}: {routes[activeDay].title}</h2>
        <ul>
          <AnimatePresence>
            {routes[activeDay].stops.map((stop, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {stop.name}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        </div>
      </div>
      <div className="map-container">
        <MapContainer center={center} zoom={7} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <AnimatedMarker positions={positions} icon={carIcon} />
          {positions.map((position, index) => (
            <Marker key={index} position={position} icon={carIcon}>
            <Popup>{routes[activeDay].stops[index].name}</Popup>
            </Marker>
          ))}
            <Polyline 
              positions={positions} 
              color="red" 
            />
        </MapContainer>
      </div>
    </div>
  )
}

export default HighlandsMap;
