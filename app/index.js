import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion/Accordion.jsx';
import ButtonIconSimple from './components/ButtonIconSimple/ButtonIconSimple.jsx';
import RobotoFont from './common/robotoFont.scss';

/**
 * ButtonIconSimple
 */
let handleButtonClicked = function(){
    alert('Button clicked');
};
ReactDOM.render(
    <ButtonIconSimple
        iconName="check"
        onClick={handleButtonClicked.bind(this)}
        />,
    document.getElementById('button-icon-simple-container'));

/**
 * Accordion
 */
ReactDOM.render(
    <Accordion />,
    document.getElementById('accordion-container'));

