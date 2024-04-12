import React from 'react'
import {useState,useEffect} from 'react'

const Location = () => {
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
