import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

const Button = ({ content, handleClick }) => {
    const isoperator = isOperator(content) ? false : true;
    
    const classValue = classNames({
        [ styles.buttonWrapper ] : true,
        [ styles.operator ] : isoperator
    });

    return(
        <div className={classValue} 
            onClick={() => handleClick(content)} 
        >
            {content}
        </div>

    );

};

export default Button;