import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { MonthContext } from './context';
import { API } from '../services/API';
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
let pData = [];
const xLabels = [
  '0 - 100',
  '101 - 200',
  '201-300',
  '301-400',
'401-500',
'501 - 600',
'601-700',
 '701-800',
 '801-900',
 '901-above'
];

export default function SimpleBarChart() {
    const {month,setMonth}=React.useContext(MonthContext)
    const [data,setData]=React.useState([24, 13, 98, 39, 48, 38, 43,89,23,82]);

    React.useEffect(()=>{
         fetch(`${API}/products/range/?month=${month}`)
         .then((res)=>{
          return res.json();
         })
         .then((json)=>{
          setData(json)
         })
    },[month])
  return <>
   <div>
        <h2>Bar Charts Stats- {month}</h2>
    </div>
    <div  style={{width:'700px',margin:'auto'}}>
    <BarChart
   
      width={700}
      height={500}
     
    
     
      series={[
        { data: data, label:`${month}`, id: 'pvId' },
        // { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </div>
  </>
}