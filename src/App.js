import './App.scss';
import { NavBar } from './components'
import { Header } from './containers'
import Ellipse from './assets/Ellipse.png'
const App = () => (
    <div className="App">
      <img src={Ellipse} alt="Ellipse" className="ellipse"/>
      <NavBar />
      <Header />
    </div>
  );

  export default App;
