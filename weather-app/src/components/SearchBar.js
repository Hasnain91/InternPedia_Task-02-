import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    if (location.trim()) onSearch(location);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
