import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

// State = class based component
// Dynamic content = class based component (forms etc.)
// Lifecycle hooks = class based component
// Render out some content = functional component

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                { title: "Quip" },
                { title: "Eventbrite" },
                { title: "Ministry Safe" },
                { title: "SwingAway" }
            ]
        };

        // we need to bind this function to the class to have access to the data
        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        });
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something Else"
        });
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}

                <hr />

                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        );
    }
}