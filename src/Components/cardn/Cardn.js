//imports
import './Cardn.css'

//function
const sportPics=[
{
  img:"./assets/images/imgs/basketball.jpg", name:"Basketball"},
  {img:"./assets/images/imgs/football.jpg", name:"Football"},
  {img:"./assets/images/imgs/handball (2).jpg",name:"Handball"},
  {img:"./assets/images/imgs/swimming.jpg",name:"Swimming"},
  {img:"./assets/images/imgs/tennis.jpg",name:"Tennis"},
  {img:"./assets/images/imgs/volleyball.jpg",name:"Volleyball"}

];

const Cardn=()=>{

return(
  <div className="cards">
    {sportPics.map((sport,index) => (
      <div className="sport-card" key={index}>
        <img src={sport.img} alt={sport.name}/>
        <div className="overlay">
            <button className="go-to-know" type="button">
              {sport.name}
            </button>
      </div>
      </div>
    ))}
  </div>
);
};

//export
export default Cardn