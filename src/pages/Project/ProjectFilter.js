import React, { useState } from "react";
import './filter.css'

const filterList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

function ProjectFilter({new_filter,ChangeFilter}) {
  const handleClick = (new_filter) =>{
    ChangeFilter(new_filter)
  } 

  return (
    <div className="project-filter">
      <nav>
        {filterList.map((f) => (
          <button
            key={f}
            onClick={() => handleClick(f)}
            className={new_filter === f ? "active" : ""}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default ProjectFilter;
