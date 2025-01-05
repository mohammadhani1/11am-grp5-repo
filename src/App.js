import React  from "react";

import SearchBox from "./Components/SearchBox";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";




function App() {
  return (
    <div className="App"> 

  <img src = "/image.png" classname="logo" alt="logo"/>

   <SearchBox/>
  <div className="main-container">



    <Sidebar />
    <Content />
    </div>
    </div>
   );
}

export default App;

