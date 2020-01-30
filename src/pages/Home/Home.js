import React, {Component} from "react";

import CTAButton from '../../components/CTAButton/CTAButton'
import LinkButton from '../../components/LinkButton/LinkButton'
import MIButton from '../../components/MIButton/MIButton'

class Home extends Component {

    constructor(props){
        super(props)
        this.state = {
            links: false,
            mi: false,
            cta: false,
        }
        this.gotoCTA = this.gotoCTA.bind(this)
        this.gotoLinks = this.gotoCTA.bind(this)
        this.gotoMI = this.gotoCTA.bind(this)
    }

    gotoCTA(){
        console.log("hit the CTA function")
        this.setState({
            cta: true
        })
        console.log(this.state.cta)
    }

    gotoLinks(){
        console.log("hit the links function")
        this.setState({
            links: true
        })
        console.log(this.state.links)
    }

    gotoMI(){
        console.log("hit the mi function")
        this.setState({
            mi: true
        })

        console.log(this.state.mi)
    }

    render() {
        return (
            <div>
                <h1>Welcome to DebTools</h1>
                <CTAButton cta={this.gotoCTA}/>
                <LinkButton links={this.gotoLinks}/>
                <MIButton  mi={this.gotoMI}/>
            </div>
        )
    };
}

export default Home;