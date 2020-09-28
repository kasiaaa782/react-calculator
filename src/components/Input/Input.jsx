import React from 'react';
import styles from './Input.module.css';

const Input = ({ content }) => (
    <div className={styles.input}>{content}</div>
);

export default Input;
