import React from 'react'
import Slider from '@mui/material/Slider';
import './SliderComponent.css'

function SliderComponent({defaultValue,min,max,label,amount,unit,step,onChange,value}) {
  return (
    <div className='sliderComponent'>
      <h4 className='label'>
        {label}
      </h4>
      <p className='amount'>{unit} {amount}</p>
      <Slider 
        defaultValue={defaultValue} 
        min={min} 
        max={max} 
        aria-label="Default" 
        valueLabelDisplay="auto" 
        className='slider-stick'
        marks
        step={step}
        onChange={onChange}
        value={value}
      />
      <span className='mark'>
        <small>{min}</small>
        <small>{max}</small>
      </span>
    </div>
  )
}

export default SliderComponent