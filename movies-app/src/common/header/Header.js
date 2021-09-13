import './Header.css';
import logo from './logo.svg';

import { Component } from "react";


export default class Header extends Component {
    
    render(){

        return(

        <div className="header">
            <img src={logo} className="App-logo" alt="logo" />

        </div>

        )



    }
}