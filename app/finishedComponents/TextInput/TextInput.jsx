import React from 'react';
import Bootstrap from 'bootstrap';
import CX from 'classnames';

export default class TextInput extends React.Component{
    constructor(props){
        super(props);
    }

    _handleOnChange(e){
        this.props.onChange({
            id: this.props.uniqueId,
            value: e.target.value
        });
    }

    render(){
        let inputClasses = CX({
            [Bootstrap['form-control']]: true
        });
        return(
            <div>
                <label>{this.props.label}</label>
                <input
                    type="text"
                    className={inputClasses}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this._handleOnChange.bind(this)}/>
            </div>
        );
    }
}

TextInput.defaultProps = {
    label: '',
    placeholder: '',
    uniqueId: 'TextInput'
};