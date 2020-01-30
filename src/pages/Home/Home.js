import React, {Component} from "react";

import HomePage from '../../components/HomePage/HomePage'
import CTAButton from '../../components/CTAButton/CTAButton'
import LinkButton from '../../components/LinkButton/LinkButton'
import MIButton from '../../components/MIButton/MIButton'

class Home extends Component {

    gotoCTA(){
        console.log("hit the CTA function")
    }

    gotoLinks(){
        console.log("hit the links function")
    }

    gotoMi(){
        console.log("hit the mi function")
    }

    render() {
        <HomePage>
            <h1>Welcome to DebTools</h1>
            <CTAButton cta={this.gotoCTA}/>
            <LinkButton links={this.gotoLinks}/>
            <MIButton  mi={this.gotoMI}/>
        </HomePage>
    };
}

export default Home;