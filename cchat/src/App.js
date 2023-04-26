// import socketIO from "socket.io-client";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Join from "./component/Join/Join.js";

// const ENDPOINT = 'http://localhost:4500/';
// const socket = socketIO(ENDPOINT, { transports: ['websocket'] });

function App() {

  // socket.on("connect", ()=>{

  // })

  return (
    <div className="App">

      <Router>

        <Routes>
          <Route path="/" component={<Join />} />
          <Route path="/chat" />
        </Routes>



      </Router>

    </div>
  );
}

export default App;
