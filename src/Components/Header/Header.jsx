import React, { Component } from 'react'
import "../Header/Header.scss"
export class Header extends Component {
  render() {
    return (
      <header>
      <div className="container">
        <nav>
          <img src="/logo.svg" alt="logo" />
          <ul>
            <li>
              <a href="#Продукция">Продукция</a>
              <div className="line"></div>
            </li> 
            
             <li>
              <a href="#Сертификаты">Сертификаты</a>
              <div className="line"></div>
            </li> 
            
             <li>
              <a href="#Наша-команда">Наша команда</a>
              <div className="line"></div>
            </li> 
            
             <li>
              <a href="#О-нас">О нас</a>
              <div className="line"></div>
            </li>
            
              <li>
              <a href="#Новости">Новости</a>
              <div className="line"></div>
            </li>  
            
            <li>
              <a href="#Вакансии">Вакансии</a>
              <div className="line"></div>
            </li> 
            
             <li>
              <a href="#Контакты">Контакты</a>
             
            </li>
          </ul>
          <button>Dark</button>

        </nav>
      </div>
      </header>
    )
  }
}

export default Header