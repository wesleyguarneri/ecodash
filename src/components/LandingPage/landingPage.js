//import landingDisplay
//import landingStyleSheet
//need to add this to stack of pages
import React from "react";
import "./landingDisplay.css"
import "./landingStyles.css"
import Button from "../Button"; 

/*
    This is an unimplemented landing page
    The user would be greeted by a hub that would link to different dashboard pages
    But this would add an extra tedious click when loading the page, so we stuck with the original map page
*/

export default function landing() {
    return(
        <Desktop1
        spanText2= "Lehigh University's Energy Dashboard"
        spanText1="EcoDash "
        spanText3="View Dashboard "
        spanText4="About "
        spanText5="Next Steps "
        />
    );
}
function Desktop1(props){
    const{spanText1, spanText2, spanText3, spanText4, spanText5 } = 
    props;
return (
  
    <div className = "container-center-horizontal">
    <div className = "desktop-1 screen">
    <div className="lehigh-universitys-energy-dashboard valign-text-middle sansita-normal-white-36px">

    <span>
        <span
            className="sansita-normal-lightgreen-36px">{spanText1}</span>
        </span>
        <span>
        <span
            className="sansita-normal-green-36px">{spanText2}</span>
        </span>
        <span>
        <span
            className="sansita-normal-white-36px">{spanText3}</span>
        </span>
        <span>
        <span
            className="sansita-normal-white-36px">{spanText4}</span>
        </span>
        <span>
        <span
            className="sansita-normal-white-36px">{spanText5}</span>
        </span>
                </div>
                </div>
                </div>
        );
    }