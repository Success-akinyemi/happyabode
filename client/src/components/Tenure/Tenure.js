import * as React from 'react';
import './Tenure.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Tenure({data, setData}) {


  const handleChange = (event) => {
    setData({
      ...data,
      loanTerm: event.target.value
    })
  };

  return (
    <div className='tenure'>
      <h3>Select Years</h3>
      <FormControl fullWidth style={{border: '#fff'}}>
        <InputLabel id="demo-simple-select-label" style={{color: '#fff', border: '#fff'}}>Tenure</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={data.loanTerm}
          label="Tenure"
          onChange={handleChange}
          style={{border: '#fff'}}
        >
          <MenuItem value={1}>1 years</MenuItem>
          <MenuItem value={2}>2 years</MenuItem>
          <MenuItem value={3}>3 years</MenuItem>
          <MenuItem value={4}>4 years</MenuItem>
          <MenuItem value={5}>5 years</MenuItem>
          <MenuItem value={6}>6 years</MenuItem>
          <MenuItem value={7}>7 years</MenuItem>
          <MenuItem value={8}>8 years</MenuItem>
          <MenuItem value={9}>9 years</MenuItem>
          <MenuItem value={10}>10 years</MenuItem>
          <MenuItem value={11}>11 years</MenuItem>
          <MenuItem value={12}>12 years</MenuItem>
          <MenuItem value={13}>13 years</MenuItem>
          <MenuItem value={14}>14 years</MenuItem>
          <MenuItem value={15}>15 years</MenuItem>
          <MenuItem value={16}>16 years</MenuItem>
          <MenuItem value={17}>17 years</MenuItem>
          <MenuItem value={18}>18 years</MenuItem>
          <MenuItem value={19}>19 years</MenuItem>
          <MenuItem value={20}>20 years</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default Tenure