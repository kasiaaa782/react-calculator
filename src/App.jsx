import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import * as math from 'mathjs';

const App = props => {
  const [input, setInput] = useState("");

  const addToInput = val => {
    setInput( input + val );
  }

  const handleEqual = () => {
    setInput( math.evaluate(input) );
  }

  return (
    <div className = {styles.app}>
      <div className= {styles.calcWrapper}>
        <Input content={input} />
        <div className={styles.row}>
          <Button content="7" handleClick={addToInput} />
          <Button content="8" handleClick={addToInput} />
          <Button content="9" handleClick={addToInput} />
          <Button content="/" handleClick={addToInput} />
        </div>
        <div className={styles.row}>
          <Button content="4" handleClick={addToInput} />
          <Button content="5" handleClick={addToInput} />
          <Button content="6" handleClick={addToInput} />
          <Button content="*" handleClick={addToInput} />
        </div>
        <div className={styles.row}>
          <Button content="1" handleClick={addToInput} />
          <Button content="2" handleClick={addToInput} />
          <Button content="3" handleClick={addToInput} />
          <Button content="+" handleClick={addToInput} />
        </div>
        <div className={styles.row}>
          <Button content="." handleClick={addToInput} />
          <Button content="0" handleClick={addToInput} />
          <Button content="=" handleClick={() => handleEqual()} />
          <Button content="-" handleClick={addToInput} />
        </div>
        <div className={styles.row}>
          <ClearButton handleClear={() => setInput("")}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
