import React from 'react';
import classes from './Accordion.scss';
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

export default class Accordion extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ReactCSSTransitionGroup
                transitionName={classes.accordionTransition}
                transitionAppear={true}
                transitionLeave={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                <div key={this.props.hide}>
                    {this.props.children}
                </div>
            </ReactCSSTransitionGroup>
        );
    }
}