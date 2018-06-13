import React, {Component} from 'react';

import './SignInButton.css';

class SignInAndCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: this.props.signedIn
        }
    }

    render() {
        return (
            <button className="sign-in-button">
                {!this.state.status && "Sign In"}
                {this.state.status && "My Account"}
            </button>
        )
    }

}

export default SignInAndCart;
