import React, {useEffect, useState} from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import { motion } from "framer-motion";
import L from "leaflet";

//Funcion para interpolar el movimiento entre dos puntos
const interpolatePosition = (start, end, t) => {
	const lat = start.lat + (end.lat - start.lat) * t
	const lng = start.lng + (end.lng - start.lng) * t
	return { lat, lng }
}

const AnimatedMarker = ({ positions, icon }) => {
	const [currentPosition, setCurrentPosition] = useState(0)
	const map = useMap()

	useEffect(() => {
		let index = 0
		const interval = setInterval(() => {
			setCurrentPosition(index)
			index = (index + 1) % positions.length
			map.panTo(positions[index])
		}, 2000)

		return () => clearInterval(interval)
	}, [positions, map])

	return (
		<Marker position={positions[currentPosition]} icon={icon}>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Popup>{`Posición: ${currentPosition}`}</Popup>
			</motion.div>
		</Marker>
	)
}

export default AnimatedMarker;