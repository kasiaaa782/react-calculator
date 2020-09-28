import React, { useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import * as math from 'mathjs';

const App = props => {
  const [input, setInput] = useState("");

  const addToInput = val => setInput( input + val );

  const handleEqual = () => setInput( math.evaluate(input) );

  const renderButtons = tab => (
    tab.map(value => {
      return value != '=' ? 
        <Button content={value} handleClick={addToInput} /> :
        <Button content={value} handleClick={() => handleEqual()} />
    })
  )

  return (
    <div className = {styles.app}>
      <div className= {styles.calcWrapper}>
        <Input content={input} />
        <div className={styles.row}>
          {renderButtons(['7','8','9','/'])}
        </div>
        <div className={styles.row}>
          {renderButtons(['4','5','6','*'])}
        </div>
        <div className={styles.row}>
          {renderButtons(['1','2','3','+'])}
        </div>
        <div className={styles.row}>
          {renderButtons(['.','0','=','-'])}
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
