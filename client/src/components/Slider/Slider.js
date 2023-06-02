import React from 'react'
import SliderComponent from '../Common/SliderComponent'

function Slider({data, setData}) {
  console.log(data)
  return (
    <div>
      <SliderComponent 
        label='House Value'
        unit='NGN'
        defaultValue={data.houseValue}
        value={data.houseValue}
        min={1000000}
        max={100000000}
        step={500000}
        onChange={(e, value) => setData({
          ...data, 
          downPayment:  value * 0.2,
          loanAmount: value * 0.8,
          houseValue: value
        })}
        amount={data.houseValue}
      />

      <SliderComponent 
        label='Down Payment'
        unit='NGN'
        defaultValue={data.downPayment}
        min={0}
        max={data.houseValue}
        step={100000}
        value={data.downPayment}
        onChange={(e, value) => setData({ 
          ...data,
          loanAmount: (data.houseValue - value),
          downPayment: value
        })}
        amount={data.downPayment}
      />

      <SliderComponent 
        label='Loan Value'
        unit='NGN'
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        min={0}
        max={data.houseValue}
        step={100000}
        onChange={(e, value) => setData({
          ...data, 
          downPayment: (data.houseValue - value),
          loanAmount: value
        })}
        amount={data.loanAmount}
      />

      <SliderComponent 
        label='Intrest rate'
        unit='%'
        defaultValue={data.intrestRate}
        value={data.intrestRate}
        min={1}
        max={100}
        step={0.5}
        onChange={(e, value) => setData({...data, intrestRate: value})}
        amount={data.intrestRate}
      />
    </div>
  )
}

export default Slider