import "./App.css";
import Slider from "./components/Slider";
import { SliderData } from "./components/SliderData";

function App() {
  return (
    <div className="App">
      <Slider slides={SliderData} />
    </div>
  );
}

export default App;
