import './App.css';
// import Button from './Button';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="App">
      Calculator app:
      <Display count="20.0" />
      <ButtonPanel />
    </div>
  );
}

export default App;
