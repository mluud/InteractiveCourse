import './OneButton.css'
import { useState } from 'react';

function OneButton({ value, onSquareClick }){
    return (
      <div className='oneButton' onClick={onSquareClick}>
        <button className='oneBtn'>{value}</button>
      </div>
    )
  }

  export default OneButton