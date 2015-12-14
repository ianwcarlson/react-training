import React from 'react';
import font from '../../common/materialDesignIconicFont.scss';
import classes from './ButtonIconSimple.scss';
import cx from 'classnames';


export default class ButtonIconSimple extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let buttonClasses = cx({
            [classes['btn']]: true,
            [classes['btnPrimary']]: true,
            [classes['btnSm']]: true
        });
        let iconClasses = cx({

            [font['zmdi']]: true,
            [font['zmdi-' + this.props.iconName]]: true,
            [font['zmdi-hc-2x']]: true,
            [classes['iconContainer']]: true
            //[font['zmdi-hc-fw']]: true

        });
        return(
            <button
                type="Submit"
                className={buttonClasses}
                onClick={this.props.onClick}>
                <i className={iconClasses}></i>
            </button>
        );
    }
}