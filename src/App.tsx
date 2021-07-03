import './App.css';
import {MainNav} from './Components/MainNav/MainNav';
import { Routing } from './Components/MainNav/Routing';

function App() {
  return (
    <div className="App">
      <MainNav/>
      <Routing/>
    </div>
  );
}

export default App;
