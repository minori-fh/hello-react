import React, {Component} from "react";

import HomePage from '../../components/HomePage/HomePage'
import CTAButton from '../../components/CTAButton/CTAButton'
import LinkButton from '../../components/LinkButton/LinkButton'
import MIButton from '../../components/MIButton/MIButton'

function Home(props) {
    return (
        <HomePage>
            <h1>Welcome to DebTools</h1>
            <CTAButton/>
            <LinkButton/>
            <MIButton/>
        </HomePage>
    );
}

export default Home;