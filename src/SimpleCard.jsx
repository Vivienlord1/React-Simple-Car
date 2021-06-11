import Title from "./Title"
import Description from "./Description"
import Image from "./Image"
import img from './img.png';

import React, { Component } from 'react';

class SimpleCard extends Component {
    render() {
        return (
            <div className ="Card_body">

                <div className="title-and-description">

                    <Title title ="Simple React Card"/>

                    <Description description ="React. js or ReactJS, React is a JavaScript library used to create UIs (user interfaces) for web applications."/>
                </div>
                <Image imgUrl ={img}/>
            </div>
        );
    }
}

export default SimpleCard;
