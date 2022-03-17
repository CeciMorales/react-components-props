import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import HeaderExample from './components/Header/HeaderExample';
import ProfileExample from './components/Profile/ProfileExample';
import SimpleExample from './components/SimpleExample/SimpleExample';

function App() {

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/components/simpleExample">Component - Simple example</Link>
            </li>
            <li>
              <Link to="/components/headerExample">Component - Header example</Link>
            </li>
            <li>
              <Link to="/props/profile">Props - Profile example</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/">
          </Route>

          <Route path="/components/simpleExample" element={<SimpleExample></SimpleExample>}>

          </Route>

          <Route path="/components/headerExample" element={<HeaderExample></HeaderExample>}>
            
          </Route>

          <Route path="/props/profile" element={<ProfileExample></ProfileExample>}>
            
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
