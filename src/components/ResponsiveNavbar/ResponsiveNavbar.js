import React, {Component} from 'react';

import LandingRoutes from "../LandingRoutes/LandingRoutes";
import SignInButton from "../SignInButton/SignInButton";
import SignInModal from "../SignInModal/SignInModal";
import './ResponsiveNavbar.css';

class ResponsiveNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            screenSize: true,
            signInModalVisible: false,
            isSignedIn: false
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        this.setState({
            screenSize: false
        });
        console.log(this.state.screenSize);
    }

    openSignInModal = () => {
        this.setState({
            signInModalVisible: true
        });
        console.log(this.state.signInModalVisible);
    }

    closeSignInModel = () => {
        this.setState({
            signInModalVisible: false
        })
    }

    render() {
        return (
            <div>
                <nav className="navbar-container">
                    <div className="navbar-logo">
                        NewCo
                    </div>

                    <div className="routes-container">
                        <LandingRoutes/>
                    </div>

                    <div onClick={() => this.openSignInModal()} className="sign-in-and-cart">
                        <SignInButton signedIn={this.state.isSignedIn}/>
                    </div>
                </nav>

                {this.state.signInModalVisible
                &&
                <SignInModal onCancel={() => this.closeSignInModel()} visible={this.state.signInModalVisible}/>
                }
            </div>
        )
    }
}

export default ResponsiveNavbar;
