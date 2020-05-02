import React from 'react';
import Logo from './components/logo/index';
import './App.css';
import Header from './components//header/index'
import Footer from './components/footer/index'
import Dashboard from './components/dashboard/index'


function App() {
  return (
    <div>
        <div>  <Header/> </div>
        <div> <Dashboard/> </div>
        <div> <Footer/> </div>
    </div>   
  );

}  // llave de app

export default App;
