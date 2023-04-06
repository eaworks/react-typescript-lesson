
import './App.css';
import Home from './Components/Home';
import Instructor from './Components/Instructor';

function App() {
  const instructor = {
    firstName: 'Ersin',
    lastName: 'Aydin'
  }
  return (
    <div className="App">
      <Home name="Ersin Aydin" courseNumber={15} isBest={false} />
      <Instructor instructorNameLastName={instructor} />
    </div>
  );
}

export default App;
