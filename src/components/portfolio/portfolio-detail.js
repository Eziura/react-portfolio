import React from "react";

export default function(props) {
    return (
      <div>
        {/* para hacer match de la url */}
        <h1>portfolio detail for {props.match.params.slug}</h1>
      </div>
    );
}
