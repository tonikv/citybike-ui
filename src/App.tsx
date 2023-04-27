import Header from "./components/Header";
import Journeys from "./components/Journeys";
import Stations from "./components/Stations";
import "./styles/App.css";

function App() {
  return (
    <div className="App-container">
      <Header />
      <div className="Content-container">
        <Stations />
        <Journeys />
      </div>
    </div>
  );
}

export default App;
