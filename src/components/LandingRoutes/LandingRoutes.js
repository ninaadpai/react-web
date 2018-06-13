import React, {Component} from 'react';

import './LandingRoutes.css';

class LandingRoutes extends Component {

    render() {

        let homeRoutes = [
            {title: "shop", link: "/"},
            {title: "trending", link: "/trending"},
            {title: "about", link: "/about"},
            {title: "help", link: "/help"},
            {title: "refer", link: "/refer"}
        ]

        return (
            <div className="landing-routes-container">
                {homeRoutes.map((item) => {
                    return (
                        <span className="routes">
                            {item.title.toUpperCase()}
                        </span>
                    )
                })}
            </div>
        )
    }

}

export default LandingRoutes;
