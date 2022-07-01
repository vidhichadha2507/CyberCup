import './App.css';

import Header from './Components/Header/Header';
import Landing from './Sections/Landing/Landing';
import Event from './Sections/Event/Event';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Landing></Landing>
      <Event></Event>
      <Footer></Footer>
    </div>
  );
}

export default App;
