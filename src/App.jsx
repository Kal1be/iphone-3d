import Display from "./components/Display";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Soundsection from "./components/Soundsection";

function App() {

  return (
    <div className="App">
      <Nav/>
      <Jumbotron/>
      <Soundsection/>
   <Display/>
    </div>
  );
}

export default App;
