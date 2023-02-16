import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      {/* <Signup /> */}
      <Dashboard />
    </div>
  );
}

export default App;
