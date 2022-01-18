import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import './App.css';
import Prisons from './Components/Pages/Prisons';
import Builders from './Components/Pages/Builders';
import Escapists from './Components/Pages/Escapists';
import Header from './Components/Header/Header';
import NotFound from './Components/Pages/404';

class App extends React.Component {
  state = {
    user: null,
    servers: [],
    selectedServer: null
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/prisons" element={<Prisons />} />
            <Route exact path="/builders" element={<Builders />} />
            <Route exact path="/escapists" element={<Escapists />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
