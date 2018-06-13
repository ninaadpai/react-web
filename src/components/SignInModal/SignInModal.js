import React from 'react';
import Loadable from 'react-loading-overlay';
import Toast from "../Toast/Toast";
import GoogleLogin from 'react-google-login';
import './SignInModal.css';
import '../../common/css/common.css';

class SignInModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
            isEmpty: false,
            onCancel: this.props.onCancel,
            visible: this.props.visible
        }

        this.signIn = this.signIn.bind(this);
    }

    signIn = () => {
        let email = this.refs.signInEmail.value;
        let pwd = this.refs.signInPassword.value;

        if (email === '' || pwd === '') {
            this.setState({
                isEmpty: true
            })
        }

        else {
            this.setState({
                isActive: true,
                isEmpty: false
            })
        }
    }

    render() {
        const showHideModal = this.state.visible ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideModal}>
                <div className="modal-main">
                    <Loadable
                        animate={true}
                        active={this.state.isActive}
                        spinner
                        background={"#bcbcbc"}
                    >
                        <div>
                            <span className="modal-title">Sign In</span>
                            <img alt="Exit Sign In" onClick={this.state.onCancel} className="hide-sign-in"
                                 src={require('../../assets/pngs/hide-modal.png')}/>
                        </div>

                        <div className="sign-in-form">
                            {this.state.isEmpty === true
                            &&
                            <Toast/>
                            }
                            <input
                                className="input-box"
                                type="text"
                                ref="signInEmail"
                                placeholder="Email"/>

                            <input
                                className="input-box"
                                type="password"
                                ref="signInPassword"
                                placeholder="Password"/>
                        </div>

                        <button className="form-button" onClick={() => this.signIn()}>
                            Proceed
                        </button>
                        <br/><br/>
                        OR
                        <br/><br/>
                        <button className="facebook-sign-in">
                            Sign In with Facebook
                        </button>
                        <br/><br/>
                        <GoogleLogin
                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                            buttonText="Sign In with Google"
                            onSuccess={() => this.responseGoogle()}
                            onFailure={() => this.responseGoogle()}
                        />
                        <br/><br/>
                        <span className="sign-up-link">
                        Don't have an account? <a>Sign Up</a>
                    </span>
                    </Loadable>
                </div>
            </div>
        )
    }

    responseGoogle = (response) => {
        console.log(response);
    }
}

export default SignInModal;
