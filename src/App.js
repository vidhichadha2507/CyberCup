import './App.css';

import Header from './Components/Header/Header';
import Landing from './Sections/Landing/Landing';
import Event from './Sections/Event/Event';
import Sponsor from './Sections/Sponsors/Sponsors';
import Team from './Sections/Team/Team';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landing></Landing>
      <Event></Event>
      <Sponsor></Sponsor>
      <Team></Team>
    </div>
  );
}

export default App;
