import React, { Component } from "react";
import Button from "../Buttons/Button1/Button";
import Button2 from "../Buttons/Button2/Button2";
import "../Products/Products.scss";
export class Products extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <h2>
            Наша <span>продукция</span>
          </h2>
          <div className="buttonPro">
            <Button desc="Ламинатные тубы" />
            <Button desc="Экструзионные тубы" />
            <Button desc="Другая упаковка" />
          </div>
          <img src="/product.svg" alt="" />
          <div className="catalog">
            <Button2 title="Перейти в каталог" />
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
