import React from "react";
import "../App.css";
import Tommys3 from "../videaslike/Tommys3.jpg";
export default function Tommy(){
    return(
        <div className="App">
            <h1 className="naslov">Tommy Shelby</h1>
            <p id="text2"><img id="slika" src={Tommys3} alt="a"></img>Thomas Michael Shelby OBE DCM MM MP vođa je kriminalne bande u Birminghamu, Peaky Blinders-a i patrijarh obitelji Shelby.
                Tommy je služio u Prvom svjetskom ratu s činom vodnika i odlikovan je za hrabrost. Njegova iskustva u Prvom svjetskom ratu ostavila su ga razočaranog 
                i zaokupljenog stalnim noćnim morama, a on postaje odlučan preseliti svoju obitelj u svijet.
                Nakon osvete s njujorškom mafijom i tijekom godine pada Wall Streeta,
                Thomas Shelby postao je član parlamenta kao socijalistički političar dok je stolicu u ilegalnom poslu posuđivao svom starijem bratu Arthuru Shelbyju.
            </p>
        </div>
    );
}