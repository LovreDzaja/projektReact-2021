import React from "react";
import './App.css';
import Peaky from "./videaslike/Peaky.mp4";
import John from "./Components/JohnShelby.js";
import Arthur from "./Components/ArthurShelby.js";
import Tommy from "./Components/TommyShelby.js";
import render, { Forma } from "./Components/forma.js";

import {BrowserRouter as Ruter,Switch, Link,Route} from "react-router-dom";
function App() {
  return (
    <Ruter>
    <div className="App">
    <div className="topnav" id="myTopnav">
        <Link to="/john">John Shelby</Link>
        <Link to="./Arthur">Arthur Shelby</Link>
        <Link to="./Tommy">Tommy Shelby</Link>
        <Link to="/Forma">Postanite dio nas!</Link>
      </div>
      <h1 className="naslov">Peaky Blinders</h1>
      <p id="text">Peaky Blinders bila je ulična banda sa sjedištem u Birminghamu u Engleskoj, koja je djelovala od kraja 19. stoljeća do početka 1900-ih. Skupina, koja je izrasla iz surove ekonomske prikraćenosti radničke klase Britanije, sastojala se uglavnom od mladića niže do srednje klase. Društvenu moć izvodili su iz pljačke, nasilja, reketa, ilegalnih kladionica i kontrole kockanja. Članovi ove bande nosili su odjeću s potpisom koja je uključivala jakne po mjeri, kapute s reverom, prsluke na dugmad, svilene marame, hlače s donjim zvonom, kožne čizme i ravne kapice.

Dominacija Blindersa nastala je premlaćivanjem suparnika, poput "Sloggera", za koje su se borili za teritorij u Birminghamu i okolnim okruzima. Držali su kontrolu gotovo 20 godina do 1910. godine, kada ih je pretekla veća banda, Birmingham Boysi pod vodstvom Billyja Kimbera. Međutim, iako su nestali do 1920-ih, naziv "Peaky Blinders" postao je sinonimni žargon za bilo koju uličnu bandu u Birminghamu.

2013. ime je ponovno upotrijebljeno za televizijsku seriju BBC-a pod nazivom Peaky Blinders. Serija u kojoj glume Cillian Murphy, Paul Anderson i Joe Cole kriminalna je priča o izmišljenoj kriminalnoj obitelji koja djeluje u Birminghamu neposredno nakon Prvog svjetskog rata.</p>

      
          <Switch>
          <Route path="/john" component={John}></Route>
        <Route path="/Arthur" component={Arthur}></Route>
        <Route path="/Tommy" component={Tommy}></Route>
        <Route path="/Forma" component={Forma}></Route>
        </Switch>
       
      <video autoPlay loop muted 
      style={
        {position:"absolute",
      width:"100%",
      left:"50%",
      top:"50%",
        height:"100%",
        objectFit:"cover",
        transform:"translate(-50%, -50%)",
        zIndex:"-1"
    }
      }
      >
      <source src={Peaky} type="video/mp4"/>
      </video>
    </div>  
    
    </Ruter>
  );
}

export default App;
