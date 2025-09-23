import React from "react";
import profilePicture from "../../../static/assets/images/bio/profile-picture.jpg";

export default function () {
  return (

    <div className="content-page-wrapper">
      <div 
      className="left-column"
      style={{
        backgroundImage: "url(" + profilePicture + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      >

      </div>

      <div className="right-column">
        Lorem ipsum dolor sit amet consectetur adipiscing elit ante nibh egestas potenti nam orci, at purus interdum hac class sed curae dui habitant bibendum conubia eu. Porttitor scelerisque mattis placerat ut auctor torquent sodales, mus cras donec nec nullam quis velit, inceptos malesuada gravida dictumst at ligula. Semper rhoncus bibendum libero facilisis pellentesque leo cubilia placerat cursus, ultricies luctus fames eget enim odio nunc laoreet commodo litora, mauris venenatis ullamcorper varius purus nec imperdiet curae.
        Rhoncus ut penatibus netus ante ad dictumst purus mus litora, nisi viverra tempus nibh suscipit neque vulputate pulvinar sapien, etiam congue tortor consequat curabitur sed integer fermentum. Quisque faucibus pretium et sociosqu purus hac lobortis ac, primis nostra massa nascetur imperdiet mollis quam elementum dignissim, nullam vehicula semper taciti accumsan euismod mattis. Nullam cras praesent justo ad eros tortor lacinia, vehicula per erat ultricies interdum aptent, turpis lectus rhoncus nascetur fermentum parturient.
      </div>
    </div>
  );
}
