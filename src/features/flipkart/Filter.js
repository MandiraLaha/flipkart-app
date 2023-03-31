import React, { useState } from "react";

const Filter = (props) => {
  const { searchText, setSearchText } = props;

  const handleOnClick = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div style={{ display: "flex", alignContent: "left" }}>
      <div>
        <div style={{ fontSize: "14px", fontWeight: "500", marginTop: "10px" }}>
          Filter By Title/ Order ID
        </div>
        <div style={{ marginLeft: "20px" }}>
          <input
            type="text"
            placeholder="Start typing to search"
            onChange={handleOnClick}
            value={searchText}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
