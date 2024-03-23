import React from 'react';

function LocationInput({ getLocation }) {
  return (
    <div className="location-input">
      <button onClick={getLocation}>Get My Location</button>
    </div>
  );
}

export default LocationInput;
