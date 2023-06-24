import React, { Component } from 'react'
import MultipleItems from '../Carousel/multiple'

export class Sertificate extends Component {
  render() {
    return (
  <section>
    <div className="container">
        <div className="sertificate">
        <h2>Качество продукции подтверждают <span>сертификаты</span></h2>

        <MultipleItems/>
    </div>
    </div>
  </section>
    )
  }
}

export default Sertificate