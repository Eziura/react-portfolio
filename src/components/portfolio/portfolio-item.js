import React, { Component } from "react";
import { Link } from "react-router-dom";

//Data that we'll need:
// - Background image: thumb_image_url
// - logo: logo_url
// - description: description
// - id: id

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItemClass: ""
    };
  }

  handleMouseEnter() {

  }

  handleMouseLeave() {

  }

  render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <div className="portfolio-item-wrapper">
        <div
          className="portfolio-img-background"
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }}
        />

        <div className="img-text-wrapper">
          <div className="logo-wrapper">
            <img src={logo_url} />
          </div>
          <div className="subtitle">{description}</div>
        </div>
      </div>
    );
  }
}

