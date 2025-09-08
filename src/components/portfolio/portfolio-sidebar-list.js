import React from "react";

const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div key={portfolioItem.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={portfolioItem.thumb_image_url} />
                </div>
                <h1 className="title">{portfolioItem.name}</h1>
                <p>{portfolioItem.id}</p>
            </div>
        )
    })
    return (
        <div className="portfolio-sidebar-list-wrapper">
            <h1>{portfolioList}</h1>
        </div>
    );
};

export default PortfolioSidebarList;