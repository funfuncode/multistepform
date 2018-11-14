import React, {Component} from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class Confirm extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const values = this.props.values;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm your details" />
                    <List>
                        <ListItem
                        primaryText="First Name"
                        secondaryText={values.firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={values.lastName}
                        />
                        <ListItem
                            primaryText="E-mail"
                            secondaryText={values.email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={values.occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={values.city}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={values.bio}
                        />
                    </List>
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton
                        label="Confirm and Continue"
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

export default Confirm;