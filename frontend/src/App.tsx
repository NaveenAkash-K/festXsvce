import Home from "./pages/Home";
import "./App.css";
import EventInfo from "./page/events/EventInfo";
import Header from "./components/common/Header";
import Event from "./page/events/Event";
function App() {
  return <>
  <Header/>
  {/* <EventInfo/> */}
  <Event/>
  </>;
}

export default App;
