import React from 'react';
import classes from './Button.scss';
import cx from 'classnames';
import bootstrap from 'bootstrap';

export default class Button extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let buttonClasses = cx({
            [bootstrap['btn']]: true,
            [bootstrap['btn-primary']]: this.props.buttonType === 'btn-primary',
            [bootstrap['btn-default']]: this.props.buttonType === 'btn-default',
            [bootstrap['btn-lg']]: false
        });
        return(
            <button
                onClick={this.props.onClick}
                className={buttonClasses}>
                {this.props.text}
            </button>
        );
    }
}