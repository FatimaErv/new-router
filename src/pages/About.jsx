import React from 'react'
import "./about.css"
import "../assets/image/objects.png"

function About() {
  return (
    <div>
     <section className='course'>
      <div className='courses'>
        <h1>Обучающие курсы
        Генераторы задач</h1>
        <p>И многое другое для учителей и обучающихся. 
        Проект старается сделать онлайн образовательние более доступным</p>
        <div className='courses-1'>
          <input placeholder='Искать по сайту...' type="text" />
          <button>Найти</button>
        </div>
      </div>
      <img src="https://freelancermap.s3.eu-west-1.amazonaws.com/channel_incl2/what-does-a-front-end-developer-do----career-insights-4940.jpg" alt="" />
     </section>
     <section className='dlya'>
    \
      <div className='dlya-1'>
      <h6>Курсы</h6>
      <p>И обучающие материалы для самообразования, повышения квалификации, аттестации. База курсов постоянно расширяется</p>
      </div>
     
      <div className='dlya-1'>
      <h6>Генераторы</h6>
      <p>Задачи, на которые нет решений и дети не смогут списать их. Плюс возможность большого выбора заданий для индивидуальной работы</p>
      </div>
    
      <div className='dlya-1'>
      <h6>Сертификат</h6>
      <p>Мы работаем над получением образовательной лицензии, чтобы выдавать документы государственного образца</p>
      </div>
     </section>
     <section>
      <div className='program'>
        <h1>Актуальные программы</h1>
        <p>Популярные образовательные программы на нашей платформе.</p>
      </div>
      <div className='program-boxes'>
        <div className='program-box'>
          <img src="" alt="" />
          <p>Математика 8 класс</p>
          <h6>Решение текстовых задач</h6>
          <h5>1000 РУБ</h5>
          <button>Записаться</button>
        </div>
        <div className='program-box'>
          <img src="" alt="" />
          <p>Математика 8 класс</p>
          <h6>Решение текстовых задач</h6>
          <h5>1000 РУБ</h5>
          <button>Записаться</button>
        </div>
        <div className='program-box'>
          <img src="" alt="" />
          <p>Математика 8 класс</p>
          <h6>Решение текстовых задач</h6>
          <h5>1000 РУБ</h5>
          <button>Записаться</button>
        </div>
      </div>
     </section>
    </div>
  )
}

export default About
