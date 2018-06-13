import React from 'react';
import ResponsiveNavbar from "../../components/ResponsiveNavbar/ResponsiveNavbar";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";

class Landing extends React.Component {

    render() {
        return (
            <div>
                <ResponsiveNavbar/>
                <ImageCarousel/>
            </div>
        );
    }
}

export default Landing;
