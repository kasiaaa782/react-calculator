import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import * as math from 'mathjs';

const App = props => {
  const [inputState, setInputState] = useState({
    input: ""
  });

  const addToInput = val => {
    setInputState({
      input: inputState.input + val
    });
  }

  const handleEqual = () => {
    setInputState({
      input: math.evaluate(inputState.input)
    });
  }

  return (
    <div className = {styles.app}>
      <div className= {styles.calcWrapper}>
        <Input input={inputState.input} />
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
          <ClearButton handleClear={() => setInputState({ input: "" })}>
            Clear
          </ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
