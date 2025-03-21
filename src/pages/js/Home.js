'use clint'

import React, { Component, useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css'
import Navbar from "./Navbar"
import Futer from "./Footer1"
import Images from "./Images"


export default function Home() {

    const [state, setState] = React.useState(1)
    const [state1, setState1] = React.useState();
    useEffect(() => {
      setState1(
        localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
      );},[]);
    return (
<div>
        {state1==="en" ?(<div> <div className='body1'>
            
        <Navbar />


        <Carousel data-bs-theme="dark">
            <Carousel.Item className='item1'>
                <img
                    className="d-block"
                    src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-slider01.jpg"
                    alt="First slide"
                />
                <Carousel.Caption id="carousel_c">
                <h1>Solutions that 
never miss the aim</h1>

                    <div className="buttons">
                        <button onClick={()=>
                        window.location="/servis"
                        } className='button'>Learn More</button>
                        <button onClick={()=>
                        window.location="/blog"
                        } className='button1'>Our Services</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-slider02.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className='carusel'>
                    <h1>Expert Financial Advice</h1>
                    <p>With over 20 years of experience we'll ensure you always get the best guidance</p>
                    <div onClick={()=>
                        window.location="/servis"
                        } className="buttons">
                        <button className='button'>Our Services</button>
                        <button onClick={()=>
                        window.location="/blog"
                        } className='button1'>Purchase now</button>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="big1">
            <div className="bigdiv">
                <div className="card1">
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon01.jpg" alt="" />
                    <h3>Financial Planning</h3>
                    <p>We'll help you make sensible decisions about money that can help you achieve your goals in life.</p>
                </div>
                <div className="card1">
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon02.jpg" alt="" />
                    <h3>Retirement Planning</h3>
                    <p>Use our strategies and retirement advice, including retirement calculators to help you retire faster.</p>
                </div>
                <div className="card1">
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon03.jpg" alt="" />
                    <h3>Risk Management</h3>
                    <p>Risk management is intended to manage financial and other losses associated with risks to your assets or business.</p>
                </div>
                <div className="card1">
                    <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon04.jpg" alt="" />
                    <h3>Taxation</h3>
                    <p>Tax planning considers the tax implications of business decisions, usually with the goal of minimizing tax liability.</p>
                </div>
            </div>
        </div>
        <div className="soz1">
            <h1>What We Do</h1>
            <div className="soz2">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className="line"></div>
                    <p>We provide expert financial advice for businesses and individuals</p>
                </div>
                <button>See All Services</button>
            </div>
        </div>
        <div className="katta1">
            <center><h1 className='katta1_about_h1'>О нас</h1></center>
            <center><div className="blue1"></div></center>
            <div className="cards1">
                <div className="cards2">
                    <div className="card4">
                        <div className="buttons1">
                            <button
                                style={state === 1 ? { background: "#44bef1", color: "#fff", border: "none !important" } : state === 2 ? { background: "white" } : { background: "white" }}
                                onClick={() => setState(1)} className='but1'>Facts</button>
                            <button style={state === 2 ? { background: "#44bef1", color: "#fff", border: "none" } : state === 2 ? { background: "white" } : { background: "white" }} onClick={() => setState(2)} className='but2'>Advantages</button>
                            <button style={state === 3 ? { background: "#44bef1", color: "#fff", border: "none" } : state === 2 ? { background: "white" } : { background: "white" }} onClick={() => setState(3)} className='but2'>Skills</button>
                        </div>
                        <p className='about_p'>Our company is your one stop solution for all needs. There is no doubt that we are the leaders and you don't have to worry about our image because it is perfect.</p>
                        {state === 1 ? (<div className='fact1'>
                            <div className="facts">
                                <h1>275</h1>
                                <p>Cases completed</p>
                            </div>
                            <div className="facts">
                                <h1>19</h1>
                                <p>Consultants</p>
                            </div>
                            <div className="facts">
                                <h1>130</h1>
                                <p>Awards won</p>
                            </div>
                        </div>) : <div>
                            {state === 2 ? (<div className='advantage1'>

                                <div className="advantages">
                                    <h1>19</h1>
                                    <p>Consultants</p>
                                </div>
                                <div className="advantages">
                                    <h1>130</h1>
                                    <p>Awards won</p>
                                </div>
                                <div className="advantages">
                                    <h1>275</h1>
                                    <p>Cases completed</p>
                                </div>
                            </div>) : (<div className='skill1'>
                                <div className="skills">
                                    <h1>130</h1>
                                    <p>Awards won</p>
                                </div>
                                <div className="skills">
                                    <h1>275</h1>
                                    <p>Cases completed</p>
                                </div>
                                <div className="skills">
                                    <h1>19</h1>
                                    <p>Consultants</p>
                                </div>
                            </div>)}</div>
                        }

                    </div>
                    <div className="card4">
                        <h1 className='card_about_us_ikki_page'>Doing the right thing, at the right time.</h1>
                        <p className='card_about_us_ikki_p'>Welcome to the leading company on the market! Our success is driven by the highest quality customer service. We can meet the requirements even of the whimsical clients; there are no complex tasks for us! Thanks for your choice! Our company can boast the reputation of the trusted partner known worldwide. We are proud of the uncompromising quality of services</p>
                        <button className='card_about_us_ikki_button'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact_form_input_big">
            <div className="contact_form_input_big_div">
                <h1>Contact Form</h1>
                <div className="blue1"></div>
                <div className="contact_form_input_big_div_input">
                    <form action="">
                            <label>
                        <p>Email</p>
                        <input type="email" name="" id="" required/>
                    </label>
                    <label>
                        <p>First name</p>
                        <input type="text" required/>
                    </label>
                    <label>
                        <p>Second name</p>
                        <input type="text" required/>
                    </label>
                    <button>Subscribe</button>
                    </form>
            
                </div>
                
            </div>
            <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2019/07/mt-0514-home-image-2.png" alt="" />
        </div>
        <div className="Testimonial">
            <center><h1>Testimonials</h1></center>
            <center><div className="blue1"></div></center>
        
<center><div className="testimonial_cards">
    <testimonial_card  className='sli1'>
    <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img01.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Hi, guys! You've solved my<br />  problem in no time! Your <br /> efficient services and customer care are second to none!</p>

<strong>Adam Watson</strong>
<h4>(CEO & Founder)</h4>
</div>
    </testimonial_card>
    <testimonial_card className='sli1'>
      <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img02.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Wow, I'm so happy with your service. You managed to exceed my <br /> expectations! You guys are very efficient.</p>

<strong>Louise Smith</strong>
<h4>(CEO & Founder)</h4>
</div></testimonial_card>
    <testimonial_card id="sli11" className='sli1'>
    <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img03.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Great organization!! Your prompt answer became a pleasant surprise for me.You've rendered an invaluable service! Thank you!</p>

<strong>Jack Walsh</strong>
<h4>(CEO & Founder)</h4>
</div>
    </testimonial_card>

  
        </div></center></div>
        <Images />
        <Futer />
    </div></div>):(<div> <div className='body1'>
            
    <Navbar />


    <Carousel data-bs-theme="dark">
        <Carousel.Item className='item1'>
            <img 
                className="d-block"
                src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-slider01.jpg"
                alt="First slide"
            />
            <Carousel.Caption id="carousel_c">
                <h1>Решения, которые<br /> никогда не промахивайся</h1>

                <div className="buttons">
                    <button onClick={()=>
                    window.location="/servis"
                    } className='button'>Узнать больше</button>
                    <button onClick={()=>
                    window.location="/blog"
                    } className='button1'>Наши услуги</button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block"
                src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-slider02.jpg"
                alt="Second slide"
            />
            <Carousel.Caption className='carusel'>
                <h1>Экспертный финансовый совет</h1>
                <p>Благодаря более чем 20-летнему опыту мы гарантируем <br /> вы всегда получаете лучшее руководство</p>
                <div onClick={()=>
                    window.location="/servis"
                    } className="buttons">
                    <button className='button'>Наши услуги</button>
                    <button onClick={()=>
                    window.location="/blog"
                    } className='button1'>Купить сейчас</button>
                </div>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    <div className="big1">
        <div className="bigdiv">
            <div className="card1">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon01.jpg" alt="" />
                <h3>Финансовое планирование</h3>
                <p>Мы поможем вам принять разумные решения относительно денег, которые помогут вам достичь ваших жизненных целей.</p>
            </div>
            <div className="card1">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon02.jpg" alt="" />
                <h3>Пенсионное планирование</h3>
                <p>Воспользуйтесь нашими стратегиями и советами по выходу на пенсию, включая пенсионные калькуляторы, которые помогут вам быстрее выйти на пенсию.</p>
            </div>
            <div className="card1">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon03.jpg" alt="" />
                <h3>Управление рисками</h3>
                <p>Управление рисками предназначено для управления финансовыми и другими потерями, связанными с рисками для ваших активов или бизнеса.</p>
            </div>
            <div className="card1">
                <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/08/mt-0514-home-icon04.jpg" alt="" />
                <h3>Налогообложение</h3>
                <p>Налоговое планирование учитывает налоговые последствия бизнес-решений, обычно с целью минимизации налоговых обязательств.</p>
            </div>
        </div>
    </div>
    <div className="soz1">
        <h1>Что мы делаем</h1>
        <div className="soz2">
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="line"></div>
                <p>Мы предоставляем экспертные финансовые консультации для предприятий и частных лиц</p>
            </div>
            <button>Посмотреть все услуги</button>
        </div>
    </div>
    <div className="katta1">
        <center><h1 className='katta1_about_h1'>О нас</h1></center>
        <center><div className="blue1"></div></center>
        <div className="cards1">
            <div className="cards2">
                <div className="card4">
                    <div className="buttons1">
                        <button
                            style={state === 1 ? { background: "#44bef1", color: "#fff", border: "none !important" } : state === 2 ? { background: "white" } : { background: "white" }}
                            onClick={() => setState(1)} className='but1'>Факты</button>
                        <button style={state === 2 ? { background: "#44bef1", color: "#fff", border: "none" } : state === 2 ? { background: "white" } : { background: "white" }} onClick={() => setState(2)} className='but2'>Преимущества</button>
                        <button style={state === 3 ? { background: "#44bef1", color: "#fff", border: "none" } : state === 2 ? { background: "white" } : { background: "white" }} onClick={() => setState(3)} className='but2'>Навыки</button>
                    </div>
                    <p className='about_p'>Наша компания является вашим универсальным решением для всех потребностей. Нет сомнений, что мы лидеры, и вам не нужно беспокоиться о нашем имидже, потому что он идеален.</p>
                    {state === 1 ? (<div className='fact1'>
                        <div className="facts">
                            <h1>275</h1>
                            <p>Дела завершены</p>
                        </div>
                        <div className="facts">
                            <h1>275</h1>
                            <p>Дела завершены</p>
                        </div>
                        <div className="facts">
                            <h1>275</h1>
                            <p>Дела завершены</p>
                        </div>
                    </div>) : <div>
                        {state === 2 ? (<div className='advantage1'>

                            <div className="advantages">
                                <h1>19</h1>
                                <p>Консультанты</p>
                            </div>
                            <div className="advantages">
                                <h1>19</h1>
                                <p>Консультанты</p>
                            </div>
                            <div className="advantages">
                                <h1>19</h1>
                                <p>Консультанты</p>
                            </div>
                        </div>) : (<div className='skill1'>
                            <div className="skills">
                                <h1>130</h1>
                                <p>Выигранные награды</p>
                            </div>
                            <div className="skills">
                                <h1>130</h1>
                                <p>Выигранные награды</p>
                            </div>
                            <div className="skills">
                                <h1>130</h1>
                                <p>Выигранные награды</p>
                            </div>
                        </div>)}</div>
                    }

                </div>
                <div className="card4">
                    <h1 className='card_about_us_ikki_page'>Поступаю правильно, в нужное время.</h1>
                    <p className='card_about_us_ikki_p'>Добро пожаловать в ведущую компанию на рынке! Наш успех обусловлен высочайшим качеством обслуживания клиентов. Мы можем удовлетворить требования даже самых прихотливых клиентов, для нас нет сложных задач! Спасибо за ваш выбор! Наша компания может похвастаться репутацией надежного партнера, известного во всем мире. Мы гордимся бескомпромиссным качеством предоставляемых услуг</p>
                    <button className='card_about_us_ikki_button'>Подробнее</button>
                </div>
            </div>
        </div>
    </div>
    <div className="contact_form_input_big">
        <div className="contact_form_input_big_div">
            <h1>Контактная форма</h1>
            <div className="blue1"></div>
            <div className="contact_form_input_big_div_input">
                <form action="">
                        <label>
                    <p>Электронная почта</p>
                    <input type="email" name="" id="" required/>
                </label>
                <label>
                    <p>Имя</p>
                    <input type="text" required/>
                </label>
                <label>
                    <p>Фамилия</p>
                    <input type="text" required/>
                </label>
                <button>Подписываться</button>
                </form>
        
            </div>
            
        </div>
        <img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2019/07/mt-0514-home-image-2.png" alt="" />
    </div>
    <div className="Testimonial">
        <center><h1>Testimonials</h1></center>
        <center><div className="blue1"></div></center>
    
<center><div className="testimonial_cards">
<testimonial_card  className='sli1'>
<div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img01.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Вау, я так счастлива с тобой <br /> услуга. Вам удалось превзойти <br /> мои ожидания! Ты ребята очень оперативны</p>

<strong>Адам Уотсон</strong>
<h4>(Генеральный директор и основатель)</h4>
</div>
</testimonial_card>
<testimonial_card className='sli1'>
  <div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img02.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Привет, ребята! Вы решили мою проблема в кратчайшие сроки! <br /> Твой  услуги о клиентах отлично!</p>

<strong>Луиза Смит</strong>
<h4>(Генеральный директор и основатель)</h4>
</div></testimonial_card>
<testimonial_card id="sli11" className='sli1'>
<div className="sli-kurg-rasm">

<div className="sli-img"><img src="https://template59172.motopreview.com/mt-demo/59100/59172/mt-content/uploads/2016/09/mt-0514-about-img03.png" alt="" /></div>

</div>
<div className="sli-text">
<p>Отличная организация!! Твой быстрый ответ стал  приятный сюрприз для меня.  Спасибо большое!</p>

<strong>Джек Уолш</strong>
<h4>(Генеральный директор и основатель)</h4>
</div>
</testimonial_card>


    </div></center></div>
    <Images />
    <Futer />
</div></div>)}
</div>
       
    )
}