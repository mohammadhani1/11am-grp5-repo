import React from "react";
 
  const SearchBox = () => {

    return (

        <div className="search-box">
   <from>
    <label>
        <input type="text" required placeholder="search"/>
        <button>search</button>
    </label>
   </from>

        </div>
    );
  };
  export default SearchBox;