import React from 'react';
import './scss/index.scss';
import {Route, Switch,Redirect} from "react-router-dom"
import Template from './views/template';
import Form from './views/form';
import Cv from './views/cv';

const App = () =>{
    return(
    <div className="main-container">
       <Switch>
        <Route exact path="/cv" component={Cv} />
        <Route exact path="/form" component={Form} />
        <Route exact path="/" component={Template} />
        <Redirect to="/" />
      </Switch> 
    </div>
    )
}

export default App