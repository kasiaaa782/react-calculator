import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

const isNotOperator = val => {
    return !isNaN(val) || val === "." || val === "=" ? false : true;
}

const Button = ({ content, handleClick }) => {
    const classValue = classNames({
        [styles.buttonWrapper] : true,
        [styles.operator] : isNotOperator(content)
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
