import './App.css';
import {Button, TextField} from '@mui/material';
import React, {useState} from 'react';

function App() {
  const[valuev, setValue]=useState('');

  return (
    <div className="container width-60 mx-auto flex justify-center mt-10">
      <div className='calculator w-80 bg-slate-500 p-5 rounded flex flex-wrap flex-start'>
        <TextField id="outlined-basic" variant="outlined" className='bg-slate-50 w-full text-left' value={valuev}/>
        <div className='mt-2 mx-auto grid grid-cols-4 gap-2'> 
            <Button variant="contained" className='w-1/4' value="AC" onClick={e => setValue('')}>AC</Button>
            <Button variant="contained" className='w-1/4'value='C' onClick={e=> setValue(valuev.slice(0, -1))}>C</Button>
            <Button variant="contained" className='w-1/4' value='%' onClick={e => setValue(valuev + e.target.value)}>%</Button>
            <Button variant="contained" className='w-1/4' value='/' onClick={e => setValue(valuev + e.target.value)}>/</Button>
            <Button variant="contained" className='w-1/4' value='7' onClick={e => setValue(valuev + e.target.value)}>7</Button>
            <Button variant="contained" className='w-1/4' value='8' onClick={e => setValue(valuev + e.target.value)}>8</Button>
            <Button variant="contained" className='w-1/4' value='9' onClick={e => setValue(valuev + e.target.value)}>9</Button>
            <Button variant="contained" className='w-1/4' value='*' onClick={e => setValue(valuev + e.target.value)}>*</Button>
            <Button variant="contained" className='w-1/4' value='4' onClick={e => setValue(valuev + e.target.value)}>4</Button>
            <Button variant="contained" className='w-1/4' value='5' onClick={e => setValue(valuev + e.target.value)}>5</Button>
            <Button variant="contained" className='w-1/4' value='6' onClick={e => setValue(valuev + e.target.value)}>6</Button>
            <Button variant="contained" className='w-1/4' value='-' onClick={e => setValue(valuev + e.target.value)}>-</Button>
            <Button variant="contained" className='w-1/4' value='1' onClick={e => setValue(valuev + e.target.value)}>1</Button>
            <Button variant="contained" className='w-1/4' value='2' onClick={e => setValue(valuev + e.target.value)}>2</Button>
            <Button variant="contained" className='w-1/4' value='3' onClick={e => setValue(valuev + e.target.value)}>3</Button>
            <Button variant="contained" className='w-1/4' value='+' onClick={e => setValue(valuev + e.target.value)}>+</Button>
            <Button variant="contained" className='w-1/4 col-span-1' value='.' onClick={e => setValue(valuev + e.target.value)}>.</Button>
            <Button variant="contained" className='w-1/4 col-span-1' value='0' onClick={e => setValue(valuev + e.target.value)}>0</Button>
            <Button variant="contained" className='col-span-2' onClick={e => setValue(eval(valuev))}>EQUALS</Button>            
        </div>
        
      </div>
    </div>

  );
}

export default App;
