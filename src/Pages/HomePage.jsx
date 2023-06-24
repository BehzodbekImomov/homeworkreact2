import React, { Component } from 'react'
import Company from '../Components/Company/Company'
import Contact from '../Components/Contact/Contact'
import Hero from '../Components/Hero/Hero'

import Layout from '../Components/Layout/Layout'
import Products from '../Components/Products/Products'
import Sertificate from '../Components/Sertificate/Sertificate'

export class HomePage extends Component {
  render() {
    return (
    <>
    <Layout>
    <main>
      <Hero/>
      <Company/>
      <Sertificate/>
      <Products/>
      <Contact/>
    </main>
    </Layout>
    </>
    )
  }
}

export default HomePage