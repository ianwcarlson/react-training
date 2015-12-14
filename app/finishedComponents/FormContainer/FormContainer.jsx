import React from 'react';
import Bootstrap from 'bootstrap';
import TextInput from '../TextInput/TextInput.jsx';
import Button from '../Button/Button.jsx';
import CSS from './FormContainer.scss';

export default class FormContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    _handleInputChange(idValue){
        let id = idValue.id;
        let value = idValue.value;
        if (id === "username"){
            this.setState({
                username: value
            });
        } else {
            this.setState({
                password: value
            });
        }
    }

    render(){
        return(
            <div className={CSS.formContainer}>
                <div className={CSS.textInputContainer}>
                    <TextInput
                        label="Username"
                        onChange={this._handleInputChange.bind(this)}
                        uniqueId="username"
                        value={this.state.username}
                        placeholder="Enter username"/>
                <div className={CSS.textInputContainer}>
                </div>
                    <TextInput
                        label="Password"
                        onChange={this._handleInputChange.bind(this)}
                        uniqueId="password"
                        value={this.state.password}
                        placeholder="Enter password"
                        type="password"/>
                </div>
                <div>
                    <span className={CSS.buttonContainer}>
                        <Button
                            text="Submit"
                            buttonType="btn-primary"
                            onClick={this.props.onSubmit}/>
                    </span>
                    <span className={CSS.buttonContainer}>
                        <Button
                            text="Cancel"
                            buttonType="btn-default"
                            onClick={this.props.onCancel}/>
                    </span>
                </div>
            </div>
        );
    }
};