import React, {Component} from "react";

import HomePage from '../../components/HomePage/HomePage'

class Home extends Component {
    render(){
        return(
            <HomePage>
                <h1>Welcome to DebTools</h1>
                <button onClick={() =>  HomePage.push("/links")}>Linking</button>
                <button>Movable Ink</button>
                <button>CTA Library</button>
            </HomePage>
        )
    }
}

export default Home;