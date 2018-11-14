import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render(){
        const handleInputChange = this.props.handleInputChange;
        const values = this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user details" />
                    <TextField
                    hintText="Enter your First Name"
                    floatingLabelText="First Name"
                    onChange={handleInputChange("firstName")}
                    defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleInputChange("lastName")}
                        defaultValue={values.lastName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter your e-mail"
                        floatingLabelText="e-mail"
                        onChange={handleInputChange("email")}
                        defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
};

export default FormUserDetails;