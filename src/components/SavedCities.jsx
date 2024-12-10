

import React from "react";

const SavedCities = ({ cities, onSelectCity }) => {
  if (!cities || cities.length === 0) {
    return <div>No saved cities yet.</div>;
  }

  return (
    <div className="saved-cities">
      <h3>Saved Cities:</h3>
      <ul>
        {cities.map((city, index) => (
          <li key={index} onClick={() => onSelectCity(city)}>
            {city} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedCities;
