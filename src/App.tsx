
import './App.css';
import Home from './Components/Home';
import Instructor from './Components/Instructor';
import InstructorList from './Components/InstructorList';
import Request from './Components/Request';

function App() {
  const instructor = {
    firstName: 'Ersin',
    lastName: 'Aydin'
  }
  const instructorList = [
    {
      firstName: 'Ersin',
      lastName: 'Aydin'
    }, {
      firstName: 'Erman',
      lastName: 'Aydin'
    }, {
      firstName: 'Emine',
      lastName: 'Aydin'
    }, {
      firstName: 'Sadik',
      lastName: 'Aydin'
    }]
  return (
    <div className="App">
      <Home name="Ersin Aydin" courseNumber={15} isBest={false} />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
      <Request status="success" />
    </div>
  );
}

export default App;
