import React from 'react';
// import './Map.css';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';


function Map() {
  
  const mapStyles = {        
    height: "50vh",
    width: "100vw"
  }

  const location = [
      {
          name: "Tiffan Tower",
          location: {
              lat: 22.277733374673712,
              lng: 114.17863235046072
          }
      }
  ]  
  
  const defaultCenter = {
    lat: 22.277733374673712, lng: 114.17863235046072
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyCxoVR4WnQGGQRIOloUygXTWYgU-FoN4NU'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={defaultCenter}
        >
            <Marker 
                position={{lat: 22.277733374673712, lng: 114.17863235046072}} 
            />

        </GoogleMap>
     </LoadScript>
  )

}

export default Map;