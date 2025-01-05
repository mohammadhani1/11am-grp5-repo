
import "./img.css";
const LogoImage = "/assets/images/HomePageimg.png/LogoSport";


const Logo=()=>{
    return(
        <div className="img">
    <img src={LogoImage}/>
    <h2>Next Goal</h2>
    </div>
)
}
export default Logo;