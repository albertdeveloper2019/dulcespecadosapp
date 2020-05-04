import React from 'react';
import Logo from './components/logo/index';
import './App.css';
import Header from './components//header/index'
import Footer from './components/footer/index'
import Dashboard from './components/dashboard/index'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import News from './components/news';
import Contact from './components/contact';


function App() {
  return (
    <Router>
      <div>
        <Header/>

        <Switch>
          <Route path="/News">
              <News />
          </Route>
          <Route path="/Contact">
               <Contact />
          </Route>
          <Route path="/">
              <Dashboard/>
          </Route>
        </Switch>
        <div> <Footer/> </div>

      </div>
    </Router>

  );

}  // llave de app

export default App;

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
