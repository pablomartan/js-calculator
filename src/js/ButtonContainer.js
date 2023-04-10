import React from 'react';
import { Button } from './Button';

export const ButtonContainer = () => {
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
    let tag;
    switch(s) {
      case 'zero':
        tag = '0';
        break;
      case 'one':
        tag =  '1';
        break;
      case 'two':
        tag =  '2';
        break;
      case 'three':
        tag =  '3';
        break;
      case 'four':
        tag =  '4';
        break;
      case 'five':
        tag =  '5';
        break;
      case 'six':
        tag = '6';
        break;
      case 'seven':
        tag =  '7';
        break;
      case 'eight':
        tag =  '8';
        break;
      case 'nine':
        tag =  '9';
        break;
      default:
        tag =  s;
    }
  };

  const value = b => {
    tag =  b === 'equals' ? '='
    : b === 'add' ? '+'
    : b === 'subtract' ? '-'
    : b === 'multiply' ? 'X'
    : b === 'divide' ? '/'
    : b === 'decimal' ? '.'
    : b === 'clear' ? 'AC'
    : nameToNumber(b)
  };

  return (
    <>
      <div id='button-container'>
        {btnNames.map((b, i) => {
          return (
            <Button key={i} className='calc-btn' id={b} value={value(b)} />
          )
        })}
      </div>
    </>
  )
}
