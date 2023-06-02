import React from 'react'
import './Result.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Result({data}) {
  const {houseValue, downPayment, loanAmount, loanTerm, intrestRate} = data
  
  const a = 4000 * (0.1/12)
  const b = 1 - (1 + ((0.1/12) ** -12))
  const c = a / b
  console.log('power value', c)

  const totalLoanMonths = loanTerm * 12
  const intrestPerMonth = intrestRate / 100 / 12

  const monthlyPayment = (
    loanAmount * 
    intrestPerMonth *
    (1 + intrestPerMonth) ** totalLoanMonths) / 
    ((1 + intrestPerMonth) ** totalLoanMonths -1);

  const totalIntrestGenerated = monthlyPayment * totalLoanMonths - loanAmount;

  const pieChartData = {
    labels: ['Principal', 'Intrest'],
    datasets: [
      {
        label: 'Ratio of Principal and Intrest',
        data: [houseValue, totalIntrestGenerated],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='result'>
      <div className='content'>
        <span>
          <span>Monthly Payment:</span>: NGN {monthlyPayment.toFixed(2)}
        </span>
        <div className='pieChart'>
          <Pie data={pieChartData}/>
        </div>
      </div>
    </div>
  )
}

export default Result