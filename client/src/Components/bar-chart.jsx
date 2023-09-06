import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

export default function SimpleBarChart() {
  return <>
   <div>
        <h2>Bar Charts Stats- June</h2>
    </div>
    <div  style={{width:'700px',margin:'auto'}}>
    <BarChart
   
      width={700}
      height={500}
     
    
     
      series={[
        { data: pData, label:"month", id: 'pvId' },
        // { data: uData, label: 'uv', id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
    />
    </div>
  </>
}