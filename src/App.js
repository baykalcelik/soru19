import './App.css';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Sidebar from './components/Sidebar';


function App() {


  return (
    <div className="App">
      <Navigation />
      
      <div id="bodyArea">
      <Main/>
      <Sidebar/>

      </div>

    </div>
  );
}

export default App;
