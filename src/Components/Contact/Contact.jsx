import React, { Component } from 'react'
import Button2 from '../Buttons/Button2/Button2'
import '../Contact/Contact.scss'
import Input from '../Input/Input'
export class Contact extends Component {
  render() {
    return (
     <section>
            <div className="contact">
        <div className="container">
                <h2 className='title'>Получить подробную <span>информацию</span></h2>
                <p>Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее время</p>
                <form className='form' >
                    <Input img="/user.svg" desc="Ваше имя"/>
                    <Input img="/tel.svg" desc="+375 (29) 0000000"/>
                </form>
                <textarea placeholder='Комментарий' name="" id="" cols="57" rows="3"></textarea>
                <Button2 title="Получить информацию"/>
            </div>
        </div>
     </section>
    )
  }
}

export default Contact