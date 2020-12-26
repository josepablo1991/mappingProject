import React , {useEffect, useContext} from 'react';

import Navbar from './components/layout/Navbar'
import Body from './components/layout/Body'

import './App.css';


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';





function App() {

  useEffect(()=>{
    // Init Materilize JS
    M.AutoInit();

    // eslint-disable-next-line
  })

  return (
    <div className="App">
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;
