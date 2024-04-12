import React from 'react'
import {useState,useEffect} from 'react'

const Location = () => {
    const [currLocationJs, setCurrLocationJs] = useState({});

    useEffect(()=>{
        getLocationJs();
    },[])
    const getLocationJs = () => {
        navigator.geolocation.getCurrentPosition((position) => {
          console.log(position);
          const { latitude, longitude } = position.coords;
          setCurrLocationJs({ latitude, longitude });
        });
      };
  return (
    <div>
      <>
      <h1>Current Location JS</h1>
      <p>Latitude: {currLocationJs.latitude}</p>
      <p>Longitude: {currLocationJs.longitude}</p>
      </>
    </div>
  )
}

export default Location
