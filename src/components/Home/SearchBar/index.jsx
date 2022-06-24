import { Search } from "@mui/icons-material";
import React from "react";
import "./styles.css";

const index = ({ value, changeInput }) => {
  return (
    <div className="searchBar-wrap">
      <Search className="searchBar-icon" />
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={changeInput}
      />
    </div>
  );
};

export default index;
