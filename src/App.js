import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color-generator';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* <Accordian/> */}
      {/* <RandomColor/> */}
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
