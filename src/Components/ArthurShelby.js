import React from "react";
import "../App.css";
import Arthurr from "../videaslike/Arthur.jpg";
export default function Arthur(){
    return(
        <div className="App">
                        <h1 className="naslov">Arthur Shelby</h1>
            <p id="text2"><img id="slika" alt="Arthur" src={Arthurr}></img>Arthur William Shelby Jr. izmišljeni je lik u televizijskoj seriji Peaky Blinders, a tumači ga Paul Anderson.

Arthur je najstariji od braće i sestara Shelby i žilav član Peaky Blindersa. Također je zamjenik potpredsjednika Shelby Company Limited i član ICA-e,
 djelujući kao desna ruka svog brata Tommyja Shelbyja. Arthur je hrabriji od mozga. Tijekom rata u Francuskoj, Arthur je bio vojnik zajedno sa svojim bratom Thomasom, kopajući 
 tunele kako bi smjestio ogromnu količinu eksploziva pod neprijateljske položaje: taktika koja je nekoliko puta korištena u ratu s razornim učinkom 
 i u bitci kod Verduna i u bitci na Sommi. 
 </p>

        </div>
    );
}