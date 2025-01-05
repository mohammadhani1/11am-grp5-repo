import React from "react";
import './Home.css'; 
import Navbar from '../navbar/Navbar';


function Home() {
  return (
    <>
    <Navbar/>
      <div className="content">
        <div className="video">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="back-vid"
            src="./assets/videos/Vidintro.mp4"/>
            
        </div>
        <div className="heading-Sport">
            <h1 className="title"> Next Goal</h1>
            <p className="desc">! رحلتك الرياضية تبدأ من هنا</p>
        </div>
      </div>
    </>
  );
}

export default Home;
