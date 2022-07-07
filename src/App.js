import './App.scss';
import { NavBar } from './components'
import Ellipse from './assets/Ellipse.png'
const App = () => (
    <div className="App">
      <img src={Ellipse} alt="Ellipse" className="ellipse"/>
      <NavBar />
    </div>
  );

  export default App;
