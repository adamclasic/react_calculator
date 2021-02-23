import './App.css';
import calculate from '.logic/calculate';
// import Button from './Button';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <Display />

      <ButtonPanel />
    </div>
  );
}

export default App;
