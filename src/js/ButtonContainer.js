import React from 'react';
import { Button } from './Button';

export class Buttons extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const btnNames = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'equals',
      'add',
      'subtract',
      'multiply',
      'divide',
      'decimal',
      'clear'
    ];

    const nameToNumber = s => {
      switch(s) {
        case 'zero':
          return '0';
          break;
        case 'one':
          return '1';
          break;
        case 'two':
          return '2';
          break;
        case 'three':
          return '3';
          break;
        case 'four':
          return '4';
          break;
        case 'five':
          return '5';
          break;
        case 'six':
          return'6';
          break;
        case 'seven':
          return '7';
          break;
        case 'eight':
          return '8';
          break;
        case 'nine':
          return '9';
          break;
        default:
          return s;
      }
    };

    const value = b => {
      return b === 'equals' ? '='
      : b === 'add' ? '+'
      : b === 'subtract' ? '-'
      : b === 'multiply' ? 'X'
      : b === 'divide' ? '/'
      : b === 'decimal' ? '.'
      : b === 'clear' ? 'AC'
      : nameToNumber(b)
    };

    return(
      <>
        <div id='button-container' className=''>
          {btnNames.map((b, i) => {
            return(
              <Button key={i} className='calc-btn' id={b} value={value(b)} />
            )
          })}
        </div>
      </>
    )
  }
}
