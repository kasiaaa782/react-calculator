import React from 'react';
import styles from './Button.module.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

const Button = ({ content, handleClick }) => (
    <div 
        className={`${styles.buttonWrapper} ${
        isOperator(content) ? null : styles.operator
        }`}
        onClick={() => handleClick(content)}
    >
        {content}
    </div>
);

export default Button;