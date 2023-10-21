import {createRoot} from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import "./style.css"; 
import { cardData } from "./data";
// import gg from "./userdata";
// console.log(gg);

function gg(){
  alert("hello wold");
}
function Greeting(){
  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <Card cardData={cardData}/>
          <button onClick={gg} className="btn btn-primary">button</button>
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
root.render(<Greeting/>);