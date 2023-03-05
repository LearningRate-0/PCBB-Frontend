import './App.css';
import Home from './components/Home/Home';
import Logo from './components/Logo/Logo';
import MultipleConsumers from './components/MultipleConsumers/MultipleConsumers';
import SingleConsumer from './components/SingleConsumer/SingleConsumer';
// import RightScreen from './components/RightScreen/RightScreen';

function App() {
  return (
    <div className="custom-container p-5">
    <Logo></Logo>
    <Home></Home>
    <SingleConsumer></SingleConsumer>
    <MultipleConsumers></MultipleConsumers>
    </div>
  );
}

export default App;
