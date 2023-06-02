import React, {useState} from 'react'
import './Mortgage.css'
import Slider from '../../components/Slider/Slider'
import Tenure from '../../components/Tenure/Tenure'
import Result from '../../components/Result/Result'
import { Link } from 'react-router-dom'

function Mortgage() {
    const [data, setData] = useState({
        houseValue: 3000000,
        downPayment: 3000000 * 0.2,
        loanAmount: 3000000 * 0.8,
        loanTerm: 2,
        intrestRate: 5
    })
  return (
    <div className='mortgage'>
        <div className='nav'>
            <Link to='/' className='link'><span>Home</span></Link>
        </div>
        <div className='container'>
            <div className='left'>
                <Slider data={data} setData={setData}/>
                <Tenure data={data} setData={setData}/>
            </div>
            <div className='right'>
                <Result data={data}/>
            </div>
        </div>
    </div>
  )
}

export default Mortgage