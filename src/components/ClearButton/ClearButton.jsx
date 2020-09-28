import React from 'react';
import styles from './ClearButton.module.css';

const ClearButton = ({ handleClear, children }) => (
    <div className = {styles.clearBtn} onClick={handleClear}>
        {children}
    </div>
);

export default ClearButton;