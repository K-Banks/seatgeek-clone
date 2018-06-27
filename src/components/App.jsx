import React from 'react';
import Body from './Body/Body.jsx';
import {Switch, Route} from 'react-router-dom';


function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Body}/>
      </Switch>
    </div>
  );
}

export default App;
