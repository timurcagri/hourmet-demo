import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import restaurants from './assets/data';
import { Restaurant } from './assets/data';
import { useState } from 'react';
import DrawerDefault from './components/drawer';

const App = () => {
  
  const [zoom, setZoom] = useState(13);
  const [visible, setVisible] = useState(false);
  const [restaurant, setRestaurant] = useState<Restaurant>(restaurants[0]);
  const [users, setUsers] = useState<string[]>([]);

  const shouldRenderMarker = restaurant.videos.some(video => users.includes(video.creator));


  const MapEvents = () => {
    useMapEvents({
      zoomend: (event) => {
        setZoom(event.target.getZoom());
        console.log(event.target.getZoom());
      },
    });
    return null;
  };

  const openDrawer = (restaurant: Restaurant) => {
    setRestaurant(restaurant);
    setVisible(true);
    console.log(restaurant);
  }

  return (
    <div className='h-[100vh] w-full relative'>
      <DrawerDefault restaurant={restaurant} visible={visible} setVisible={setVisible}/>
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className='h-full w-full'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapEvents />
        {zoom > 13 ? restaurants.map((restaurant) => (
          <Marker key={restaurant.id} position={restaurant.position} eventHandlers={
            {
              click: () => {
                openDrawer(restaurant);
              }
            }
          }>
            <Popup>
              {restaurant.name}
            </Popup>
          </Marker>
        )): null}
      </MapContainer>
      
    </div>
  )
}

export default App;

