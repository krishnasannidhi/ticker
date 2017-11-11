import React, {Component} from 'react'


export default class HomeComponent extends Component{
  render(){
    return <h2>{this.props.welcomeMessage}</h2>

  }
}
