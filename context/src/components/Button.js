import React from 'react'
import {useContext} from 'react';
import ThemeContext from '../context/ThemeContext.js';

export default function Button() {
     const data = useContext(ThemeContext);
  return (
    <div>button</div>
  )
}
