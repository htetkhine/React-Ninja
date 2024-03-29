import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"; 
import { cardData } from "./data";
import { Counter } from "./count";
import { GetData } from "./api";
import { Pokemon } from "./pokemon";
// import gg from "./userdata";
// console.log(gg);


function Greeting(){
  return (
    <section className="home">
      <div className="container">
        <div className="row">
          {/* <Card cardData={cardData}/>
          <Counter/>
          <GetData /> */}
          <Pokemon />
        </div>
      </div>
    </section>
  )
}
function Card({cardData}){
  // const title ="Card Title";
  return(
    cardData.map((item,index)=>(
      <div className="col-3" key={index}>
          <div className="card">
            <div className="card-image">
                <img src={item.image} alt="" className="img-fluid w-100"/>
            </div>
            <div className="card-body">
              <h3>{item.title}</h3>
              <Content/>
            </div>      
          </div>
        </div>
    ))
  )
  function Content(){
    return <p>this is paragraph</p>
  }
}

const rootPath = document.getElementById("root");
const root = createRoot(rootPath);
root.render(
  <StrictMode>
    <Greeting/>
  </StrictMode>
);