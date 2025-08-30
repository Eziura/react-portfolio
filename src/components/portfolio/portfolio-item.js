import React from "react";
import { Link } from "react-router-dom";

//Data that we'll need:
// - Background image: thumb_image_url
// - logo: logo_url
// - description: description
// - id: id

export default function (props) {
  const { id, description, thumb_image_url, logo } = props.item;
  return (
    <div className="portfolio-item-wrapper">
      <div
        className="portfolio-img-background"
        style={{
          backgroundImage: "url(" + thumb_image_url + ")"
        }}
      />

      <img src={logo} />
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}