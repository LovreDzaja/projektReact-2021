import React, { Component } from "react";
import "../App.css";
export class Forma extends Component{
    
    state={
        Ime: '',
        Prezime: '', 
        Lozinka: '',
    }
    render(){
        return(
            <div className="form">
        <form>
          <input type="text" placeholder= 'Ime' value={this.state.Ime} onChange={e=>this.setState({Ime: e.target.value})}/>
      <br></br>
          <input type="text" placeholder= 'Prezime' value={this.state.Prezime} onChange={e=>this.setState({Prezime: e.target.value})} />
          <br></br>
          <input type="password" placeholder= 'Lozinka' value={this.state.Lozinka} onChange={e=>this.setState({Lozinka: e.target.value})}/>
        <br></br>
          <button onClick = {e=>this.onSubmit(alert("Postali ste clan!! \n Vaši podatci su: \n"+" Ime: " + this.state.Ime + "\n Prezime: " + this.state.Prezime + "\n Lozinka: " + this.state.Lozinka))}>POTVRDI</button>
        </form>
      </div>
        );
    }
}

export default Forma;