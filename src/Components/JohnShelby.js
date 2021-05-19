import React from "react";
import "../App.css";
import Johnn from "../videaslike/John.jfif";

export default function John(){
    return(
        
        <div className="App">

            <h1 className="naslov">John Shelby</h1>
            
            <p id="text2"><img id="slika" src={Johnn} alt="a"/>
            John Michael Shelby, također poznat kao Johnny ili John Boy, bio je treći od Shelbyjeve braće i sestara i visokorangirani član Peaky Blindersa. 
            Također je bio 1/3 dioničar u tvrtki Shelby Family, Shelby Company Limited. Bio je suprug Esme Shelby i stoga je bio u braku s obitelji Lee.
            Nakon što se Peaky Blinders pomiješaju s obitelji Changretta, John od njih prima Crnu ruku, ali sporo reagira i propušta upozorenje svog brata Tommyja 
            te biva upucan na svojem obiteljskom imanju.</p>

        
        </div>
        
    );
}