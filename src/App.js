import './App.css';
import {Button, TextField} from '@mui/material';

function App() {
  return (
    <div className="container width-60 mx-auto flex justify-center mt-10">
      <div className='calculator w-80 bg-slate-500 p-5 rounded flex flex-wrap flex-start'>
        <TextField id="outlined-basic" variant="outlined" className='bg-slate-50 w-full'/>
        <div className='mt-2 mx-auto grid grid-cols-4 gap-2'> 
            <Button variant="contained" className='w-1/4'>AC</Button>
            <Button variant="contained" className='w-1/4'>C</Button>
            <Button variant="contained" className='w-1/4'>%</Button>
            <Button variant="contained" className='w-1/4'>/</Button>
            <Button variant="contained" className='w-1/4'>7</Button>
            <Button variant="contained" className='w-1/4'>8</Button>
            <Button variant="contained" className='w-1/4'>8</Button>
            <Button variant="contained" className='w-1/4'>*</Button>
            <Button variant="contained" className='w-1/4'>4</Button>
            <Button variant="contained" className='w-1/4'>5</Button>
            <Button variant="contained" className='w-1/4'>6</Button>
            <Button variant="contained" className='w-1/4'>-</Button>
            <Button variant="contained" className='w-1/4'>1</Button>
            <Button variant="contained" className='w-1/4'>2</Button>
            <Button variant="contained" className='w-1/4'>3</Button>
            <Button variant="contained" className='w-1/4'>+</Button>
            <Button variant="contained" className='w-1/4 col-span-1'>.</Button>
            <Button variant="contained" className='w-1/4 col-span-1'>0</Button>
            <Button variant="contained" className='col-span-2'>EQUALS</Button>            
        </div>
        
      </div>
    </div>

  );
}

export default App;
