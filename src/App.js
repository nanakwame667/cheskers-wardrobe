
import {BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Home from './screens/Home';
import Gallery from './screens/Gallery';
import About from './screens/About';
import Contact from './screens/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div>
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/gallery" component={Gallery}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
