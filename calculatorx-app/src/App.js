import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  

    const handleButtonClick = (value) => {
      setInput((prevInput) => prevInput + value);
    };

  
    const handleCalculate = () => {
      try {
       
        if (input.trim() === '=' || input.trim() === '') {
          setOutput('Error');
          return;
        }
    
        const result = eval(input);
        setOutput(result.toString());
      } catch (error) {
        setOutput('Error');
      }
    };

    const handleClear = () => {
      setInput('');
      setOutput('');
    };

    // const buttons = [7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/'];

    return (
        <div className="calculator">
          <h1>React Calculator</h1>
            <input type='text' className="display" value={input} readOnly />
            <div className="output">{output}</div>


            <div className="buttons">
                {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '*', 'C', 0, '=', '/'].map((button, index) => (
                    <button type='text' key={index} onClick={() => {
                      if (button === '=')
                        handleCalculate();
                      else if (button === 'C')
                        handleClear();
                      else
                        handleButtonClick(button);
                    }}>
                      {button}
                    </button>
                ))}
            </div>


        </div>
    );
};

export default App;