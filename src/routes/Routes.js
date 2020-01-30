import React, { Component } from 'react'; //allows us to utilize JSX 
import { Route, Switch } from "react-router-dom"; //react-router-dom is a routing lib, we are using the Route and Switch components to tell the application which component to display for which routes

//importing components to be used
import Home from '../pages/Home/Home';

//react is made up of components which can be defined using 1.) functions 2.) classes 
//1. functional components - simpler, less code, not stateful
//2. class components - longer, more code, but we can use states! 

//Below, we create the Class Component "Routes"
class Routes extends Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
        )
    }
}

export default Routes;