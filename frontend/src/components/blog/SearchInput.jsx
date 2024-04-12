import React from "react";

const SearchInput = () => {
  return (
    <div className="">
      <div className="join w-1/2">
        <div>
          <div>
            <input
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>
        <select className="select select-bordered join-item">
          <option disabled selected>Filter</option>
          <option>Recent</option>
          <option>Nearby</option>
          <option>Oldest</option>
        </select>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">new</span>
          <button className="btn join-item">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
