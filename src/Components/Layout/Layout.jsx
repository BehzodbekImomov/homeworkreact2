import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export class Layout extends Component {
  render() {
    return (
      <>
      <Header/>
{this.props.children}
      <Footer/>
      </>
    )
  }
}

export default Layout