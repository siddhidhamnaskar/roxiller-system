import logo from './logo.svg';
import './App.css';
import CustomizedTables from './Components/table';
import BasicBars from './Components/bar-chart';
import Statistics from './Components/stactistics';

function App() {
  return (
    <div className="App">
      <CustomizedTables/>
      <Statistics/>
      <BasicBars/>
    </div>
  );
}

export default App;
