'use client';
import { Accommodation } from '@/src/types';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';

const housingIcon = new Icon({
  iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
  iconSize: [38, 45] // size of the icon
});

const confettiIcon = new Icon({
  iconUrl: 'https://img.icons8.com/color/100/confetti.png',
  iconSize: [38, 45] // size of the icon
});

const MapFocus = ({ coordinates }: { coordinates: [number, number] }) => {
  const map = useMap();
  map.setView(coordinates, 13);
  return null;
};

const SimpleMap = ({
  accommodations,
  hoveredAccommodation
}: {
  accommodations: Accommodation[];
  hoveredAccommodation: number | null;
}) => {
  const mapRef = useRef(null);

  const latitude = 44.1318689;
  const longitude = 4.3643295;

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer center={[latitude, longitude]} zoom={13} ref={mapRef} className="w-full h-full">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {accommodations.map((accommodation, index) => (
        <Marker
          key={accommodation.name}
          position={accommodation.coordinates}
          icon={accommodation.icon === 'housing' ? housingIcon : confettiIcon} // Use the selected icon
        >
          <Popup>
            <strong>{accommodation.name}</strong>
            <br />
            {accommodation.address.street}, {accommodation.address.city}
            <br />
            <a href={accommodation.website} target="_blank" rel="noopener noreferrer">
              Site web
            </a>
          </Popup>
          {hoveredAccommodation === index && <MapFocus coordinates={accommodation.coordinates} />}
        </Marker>
      ))}
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
};

export default SimpleMap;
