// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    passwordHandler = () => {
        console.log('Entering password...');
    }

    render() {
        return (
            <div>
                <Keypad />
                <input onKeyUp={this.passwordHandler} type="password"></input>
            </div>
        )
    }
}
