import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

class UserForm extends Component {

    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({step: step + 1});
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({step: step - 1 });
    }

    handleInputChange = (input) => {
        return (e) => {
            this.setState({[input] : e.target.value });
        }
    };


    render(){

        const { step } = this.state;

        const { firstName, lastName, email, occupation, city, bio } = this.state;

        const values = { firstName, lastName, email, occupation, city, bio };


        switch(step){
            case 1 :
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleInputChange={this.handleInputChange}
                        values={values}
                    />
                );
            case 2 :
                return (
                    <FormPersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleInputChange={this.handleInputChange}
                    values={values}
                    />
                );
            case 3 :
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
            case 4 :
                return <Success />;
        }
    }
}

export default UserForm;