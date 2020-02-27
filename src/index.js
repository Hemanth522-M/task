import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import SignUp from './Components/signUp';
import SignIn from './Components/signIn';
import Main from './Components/Main';

import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path ="/" exact component={SignUp} />
            <Route path ="/signIn" exact component={SignIn} />
            <Route path="/questions" exact component={Main} />
        </Switch>    
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
